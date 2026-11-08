import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { consultationSchema } from "@/validations/consultation";

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 24_000) {
    return NextResponse.json({ message: "The request is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Please submit a valid request." }, { status: 400 });
  }

  const result = consultationSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json(
      { message: "Please check the form and correct the highlighted fields.", errors: result.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  try {
    await prisma.consultation.create({
      data: result.data,
      select: { id: true },
    });
  } catch (error) {
    console.error("Consultation submission could not be saved.", error instanceof Error ? error.name : "Unknown error");
    return NextResponse.json(
      { message: "We could not save your request at this time. Please try again later." },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { message: "Your request has been received." },
    { status: 201 },
  );
}
