import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Neplatný email." }, { status: 400 });
    }

    // TODO: sem uložíš email do databáze nebo odešleš do služby
    console.log("Nový odběratel:", email);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Chyba serveru." }, { status: 500 });
  }
}