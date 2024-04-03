import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next"
import httpProxy from 'http-proxy';


export const config = {
    api: {
        bodyParser: false,
    }
}

export function handler(req: NextApiRequest, res: NextApiResponse, context: { params: any }) {
    console.log('route in [...patj]')

    //dont send cookie to server
    req.headers.cookie = '';


    const proxy = httpProxy.createProxyServer();

    // Cài đặt các tuỳ chọn cho proxy
    proxy.on('error', function (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    });

    // Chuyển hướng yêu cầu tới URL mục tiêu
    proxy.web(req, res, {
        target: 'http://localhost:8080', // Thay bằng URL bạn muốn chuyển hướng tới
        changeOrigin: true, // Cần thiết nếu bạn muốn thay đổi origin của yêu cầu
        selfHandleResponse: false, // Cần thiết để Next.js xử lý phản hồi
    });
}