import { HTMLAttributes, ReactNode } from "react"

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function CardContent({ children, ...props }: CardContentProps) {
    return (
        <div className="p-2 flex flex-col justify-between" {...props}>
            {children}
        </div>
    )
}