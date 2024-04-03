import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next"
import httpProxy, { ProxyResCallback } from 'http-proxy';
import { NextResponse } from "next/server";


export const config = {
    api: {
        bodyParser: false,
    }
}

export async function POST(req: NextApiRequest) {
    console.log('req::', req)
    const { email, password } = req.body;

    console.log({ email, password })

    if (!email || !password) return NextResponse.json({ message: 'Invalid email or password', content: { email, password } });


    return NextResponse.json('success');
}
