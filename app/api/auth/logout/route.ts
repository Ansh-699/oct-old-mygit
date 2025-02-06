// import { NextResponse } from "next/server";

// export async function POST() {
//   try {
//     // Clear the authentication cookie (if using cookies)
//     const response = NextResponse.json({ message: "Logged out successfully" });
//     response.cookies.set("authToken", "", { expires: new Date(0) });

//     return response;
//   } catch {
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }
