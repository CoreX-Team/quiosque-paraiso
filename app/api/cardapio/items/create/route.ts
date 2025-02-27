import { NextRequest, NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {

    try {
        const { sectionName, data } = await req.json()
        
        const response = await prisma.menu.findFirst({
            where: {
                sectionName
            }
        })       

        const items = Array.isArray(response?.items) ? [...response.items] : [];
        items.push(data);

        await prisma.menu.update({
            where: {
                sectionName
            },
            data: {
                items
            }
        })

        return NextResponse.json({ message: 'Item(s) created successfully' }, { status: 201 })
    } catch (err) {
        return NextResponse.json({ message: err }, { status: 500 })
    }
}   