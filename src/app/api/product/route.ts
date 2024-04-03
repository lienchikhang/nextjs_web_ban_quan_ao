import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const DEFAULT_URL = 'http://localhost:8080/api/product/'

export async function GET(req: NextApiRequest) {
    const products = await axios.get(DEFAULT_URL + "get-products");

    return NextResponse.json({ content: products })
}