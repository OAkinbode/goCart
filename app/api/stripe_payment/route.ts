import { NextResponse } from "next/server";

export async function POST(request) {
  const req = await request.json();

  // Get new date
  const currentDate = new Date();

  // Parse incoming date
  const [month, day, year] = req.expiryDate.split("/").map(Number);
  const incomingDate = new Date(year, month - 1, day);

  currentDate.setHours(0, 0, 0, 0);
  incomingDate.setHours(0, 0, 0, 0);

  const hasExpired = incomingDate < currentDate;

  if (hasExpired) {
    return NextResponse.json({
      response: "Card Expired cannot process transaction",
    });
  }
  if (req.cvv >= 1000 || req.cvv < 100) {
    return NextResponse.json({
      response:
        "CVV is incorrect. Please put in the three digit number at the back of your card",
    });
  }

  //Send data to stripe

  return NextResponse.json({ response: "api works" });
}
