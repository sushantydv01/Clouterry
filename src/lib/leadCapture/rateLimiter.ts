/**
 * Serverless-compatible sliding window rate limiter
 * Tracks request counts per client IP address.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // Max 5 submissions per 10 minutes

const ipTracker = new Map<string, RateLimitRecord>();

export function checkRateLimit(clientIp: string): {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  // Retrieve or initialize record
  const record = ipTracker.get(clientIp) || { timestamps: [] };

  // Filter timestamps within current sliding window
  const activeTimestamps = record.timestamps.filter((ts) => ts > windowStart);

  // Periodic cleanup of stale IPs to preserve serverless instance memory
  if (ipTracker.size > 1000) {
    for (const [ip, rec] of ipTracker.entries()) {
      const valid = rec.timestamps.filter((ts) => ts > windowStart);
      if (valid.length === 0) {
        ipTracker.delete(ip);
      } else {
        ipTracker.set(ip, { timestamps: valid });
      }
    }
  }

  if (activeTimestamps.length >= MAX_REQUESTS) {
    const oldest = activeTimestamps[0];
    const retryAfterSeconds = Math.ceil((oldest + WINDOW_MS - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, retryAfterSeconds),
    };
  }

  // Record this attempt
  activeTimestamps.push(now);
  ipTracker.set(clientIp, { timestamps: activeTimestamps });

  return {
    allowed: true,
    remaining: MAX_REQUESTS - activeTimestamps.length,
    retryAfterSeconds: 0,
  };
}
