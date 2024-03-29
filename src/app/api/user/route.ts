import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mySearchParam = searchParams.get("mysearchparam");
  console.log({ mySearchParam });
  return new Response(JSON.stringify({ name: "john" }));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("post req body", body);
  return new Response("Ok");
}
