import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { handle, niche, followers, email } = body;

    // Basic validation
    if (!handle || !handle.trim()) {
      return NextResponse.json(
        { error: "Please provide your Instagram or TikTok handle." },
        { status: 400 }
      );
    }

    if (!niche || !niche.trim()) {
      return NextResponse.json(
        { error: "Please specify your content niche." },
        { status: 400 }
      );
    }

    if (!followers || !followers.trim()) {
      return NextResponse.json(
        { error: "Please indicate your follower range." },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid contact email." },
        { status: 400 }
      );
    }

    // In a pre-launch stage, log application details cleanly.
    // Ready for integration with Airtable, Google Sheets, or email notifications.
    console.log("[CREATOR_APPLICATION_RECEIVED]", {
      timestamp: new Date().toISOString(),
      handle: handle.trim(),
      niche: niche.trim(),
      followers: followers.trim(),
      email: email.trim().toLowerCase(),
    });

    return NextResponse.json({
      success: true,
      message: "You're on the list — cohorts are filling now.",
    });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong submitting your application. Please try again." },
      { status: 500 }
    );
  }
}
