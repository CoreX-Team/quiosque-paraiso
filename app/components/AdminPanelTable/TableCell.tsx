import { HTMLAttributes } from "react"

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
    content: string
}

export default function TableCell({ content, ...props }: TableCellProps) {
    return (
        <td className="py-3 px-6 text-left" {...props}>
            <span>
                {content}
            </span>
        </td>
    )
}