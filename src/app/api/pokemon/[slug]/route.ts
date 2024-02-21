import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.slug}`,
    );

    console.log(res.data);

    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export { GET };
