import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, division, message } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid official email address." },
        { status: 400 }
      );
    }

    // Structured logging for FIRM studio briefings
    console.log("[FIRM_BRIEFING_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      organization: organization?.trim() || "Independent",
      division: division || "General Inquiries",
      message: message?.trim() || "",
    });

    return NextResponse.json({
      success: true,
      message: "Your briefing has been received. A senior partner will respond within 24 hours.",
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Unable to process briefing. Please contact inquiries@firm.agency directly." },
      { status: 500 }
    );
  }
}
