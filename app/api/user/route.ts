import { NextRequest, NextResponse } from "next/server";
import { verifyAuthToken } from "../../utils/auth"; // Assume a function to verify tokens

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("Authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
    const user = verifyAuthToken(token); // Decode & verify JWT

    if (!user || typeof user === 'string') {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
