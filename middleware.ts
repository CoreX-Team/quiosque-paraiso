import { authMiddleware } from "@/app/api/middlewares/auth";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    return authMiddleware(req);
}

export const config = {
    matcher: "/api/cardapio/:path*", // Protege todas as rotas dentro de `/api/cardapio/`
};
