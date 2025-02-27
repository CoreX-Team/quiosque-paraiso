import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import cardapio from '../cardapio.json'


export async function GET(req: NextRequest) {

    cardapio.map(async ({sectionName, items}) => {
        await prisma.menu.create({
            data: {
                sectionName,
                items
            }
        })
    })

    return NextResponse.json({ message: 'Item(s) created successfully' }, { status: 200 })
}