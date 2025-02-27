import { HTMLAttributes, ReactNode } from "react"

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}


export function CardRoot({ children, ...props }: CardRootProps) {
    return (
        <div className="bg-white min-h-16 rounded-lg overflow-hidden shadow-md text-wrap flex flex-col" {...props}>
            {children}
        </div>
    )
} 