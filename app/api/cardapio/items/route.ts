import { NextResponse, NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET(req: NextRequest) {

    const data = await prisma.menu.findMany()

    return NextResponse.json(data)
}