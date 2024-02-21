import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const offset = searchParams.get("offset");
  const limit = searchParams.get("limit");

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
      params: {
        offset,
        limit,
      },
    });

    return NextResponse.json(res.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export { GET };
