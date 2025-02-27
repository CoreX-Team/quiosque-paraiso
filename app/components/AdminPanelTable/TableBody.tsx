import { HTMLAttributes, ReactNode } from "react"

interface TableBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export default function TableBody({ children, ...props }: TableBodyProps) {
    return (
        <tbody {...props}>
            {children}
        </tbody>
    )
}