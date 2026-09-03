import { defineConfig } from 'vite';
import { resolve, join, relative } from 'path';
import { readdirSync, statSync } from 'fs';

function getHtmlEntries(dir, baseDir = dir) {
  const entries = {};
  const ignoredDirs = new Set(['node_modules', '.git', 'dist', 'clone_for_unitsgr']);

  function scan(currentDir) {
    const files = readdirSync(currentDir);
    for (const file of files) {
      if (ignoredDirs.has(file)) continue;
      const fullPath = join(currentDir, file);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (file.endsWith('.html')) {
        const relPath = relative(baseDir, fullPath);
        const name = relPath.replace(/\.html$/, '').replace(/[\\/]/g, '_');
        entries[name || 'main'] = resolve(fullPath);
      }
    }
  }

  scan(dir);
  return entries;
}

export default defineConfig({
  server: {
    port: 5173,
    host: true,
  },
  build: {
    rollupOptions: {
      input: getHtmlEntries(__dirname),
    },
  },
});

