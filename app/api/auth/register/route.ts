import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (
      !email ||
      !password ||
      !isValidEmail(email) ||
      !isValidPassword(password)
    ) {
      return NextResponse.json({}, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({}, { status: 500 });
  }
};

const isValidEmail = (email: string) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

const isValidPassword = (password: string) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
    password
  );
};
