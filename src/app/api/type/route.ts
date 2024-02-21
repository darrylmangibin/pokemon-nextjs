import axios from "axios";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/type");

    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export { GET };
