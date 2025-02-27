import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { URLSearchParams } from 'url'


export async function DELETE(req: NextRequest) {

    const params = new URLSearchParams(req.url).values().toArray()

    const response = await prisma.menu.findFirst({
        where: {
            sectionName: params[0] as string
        }
    })

    const items = response?.items as []
    //@ts-expect-error
    const new_items = items.filter(item => item.name != params[1])

    await prisma.menu.update({
        where: {
            sectionName: params[0] as string
        },
        data: {
            items: new_items
        }
    })

    return NextResponse.json({ message: 'Item(s) deleted successfully' }, { status: 200 })
}