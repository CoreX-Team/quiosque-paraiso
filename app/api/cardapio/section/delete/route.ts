import { NextResponse, NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { URLSearchParams } from 'url'


export async function DELETE(req: NextRequest) {

    const params = new URLSearchParams(req.url).values().toArray()

    await prisma.menu.delete({
        where: {
            sectionName: params[0] as string
        }
    })

    return NextResponse.json({ message: 'Section deleted successfully' }, { status: 200 })
}