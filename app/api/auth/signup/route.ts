import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "../../../../lib/prisma"

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10)

    // Save user to the database
    const newUser = await prisma.user.create({
      data: {
        name: "Default Name", // Add a default name or get it from req.body
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 })
  } catch (error) {
    console.error(error)  // Log the error
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
