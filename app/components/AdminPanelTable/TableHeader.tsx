'use client'
import { HTMLAttributes, useEffect, useRef, useState } from "react"

interface TableHeaderProps extends HTMLAttributes<HTMLDivElement> {
    headerTitles: string[]
    resize?: boolean
}

export default function TableHeader({ headerTitles, resize, ...props }: TableHeaderProps) {

    const [colWidths, setColWidths] = useState([400, 500, 1047, 500, 500, /*200*/]);
    const headersRef = useRef<(HTMLTableCellElement | null)[]>([]);

    const handleMouseDown = (index: number, e: React.MouseEvent) => {
        const startX = e.clientX;
        const startWidth = headersRef.current[index]?.offsetWidth ?? 0;

        document.body.style.userSelect = "none";
        document.body.style.cursor = "ew-resize";
        const onMouseMove = (e: MouseEvent) => {
            const newWidth = startWidth + (e.clientX - startX);
            const newColWidths = [...colWidths];
            newColWidths[index] = newWidth;
            setColWidths(newColWidths);
        };



        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.body.style.cursor = "";
            document.body.style.userSelect = "";
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    return (
        <thead {...props}>
            <tr className="bg-gray-200 w-full text-gray-600 uppercase text-sm leading-normal">
                {headerTitles.map((title, i) => {
                    if (i === 0) return (
                        // @ts-expect-error
                        <th key={crypto.randomUUID()} ref={(el) => (headersRef.current[0] = el)} style={{ width: `${colWidths[0]}px` }} className="py-3 px-3 text-left text-md resizeable resize pl-3 outline-none rounded-tl-lg">
                            <div className="relative flex ">

                                {title}
                                <div
                                    className="cursor-ew-resize absolute flex justify-end -right-0 bg-red w-[0.3rem] h-6"
                                    onMouseDown={(e) => handleMouseDown(i, e)}
                                ><div className="w-[1px] h-full bg-black"></div></div>
                            </div>
                        </th>
                    )

                    if (i === headerTitles.length - 1) return (
                        <th key={crypto.randomUUID()} className="py-3 px-6 rounded-tr-lg text-left">Actions</th>
                    )


                    return (

                        // @ts-expect-error
                        <th ref={(el) => (headersRef.current[i] = el)} style={{ width: `${colWidths[i]}px` }} className="py-3 px-3 text-left text-md resizeable resize pl-3 outline-none" key={crypto.randomUUID()}>
                            <div className="flex relative">

                                {title}

                                <div
                                    className="cursor-ew-resize absolute flex justify-end -right-[1px] bg-red w-[0.3rem] h-6"
                                    onMouseDown={(e) => handleMouseDown(i, e)}
                                ><div className="w-[1px] h-full bg-black"></div></div>

                            </div>
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}