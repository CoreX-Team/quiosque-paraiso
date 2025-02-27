import { HTMLAttributes } from "react"

interface CardTitleProps extends HTMLAttributes<HTMLParagraphElement> {
    title: string
}

export function CardTitle({ title, ...props }: CardTitleProps) {
    return (
        <h2 className="text-sm text-pretty font-bold text-gray-800" {...props}>
            {title}
        </h2>
    )
}