import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
const INTERNAL_KEY = process.env.INTERNAL_KEY;

interface DecodedToken {
    user_id: string;
    org_id: string;
    projects: string[];
    role: string;
    exp: number;
}

export async function authMiddleware(req: NextRequest) {
    // Verifica se é uma requisição interna (feita pelo seu sistema)
    const internalKey = req.headers.get("x-internal-key");
    console.log(internalKey);
    if (internalKey && internalKey === INTERNAL_KEY) {
        return NextResponse.next();
    }

    // Caso contrário, exige autenticação com JWT
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return NextResponse.json({ error: "Token ausente ou inválido" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

        // Adiciona o usuário nos headers para reutilizar na API
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set("x-user-id", decoded.user_id);
        requestHeaders.set("x-org-id", decoded.org_id);

        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
    } catch (error) {
        return NextResponse.json({ error: "Token inválido ou expirado" }, { status: 401 });
    }
}
