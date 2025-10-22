import { NextResponse } from "next/server";

export async function POST(request) {
  const { token } = await request.json();
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await verify.json();

  // ✅ Hard block if no success or score below threshold
  if (!data.success || data.score < 0.5) {
    return NextResponse.json(
      { success: false, message: "reCAPTCHA failed", data },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    score: data.score,
    action: data.action,
  });
}
