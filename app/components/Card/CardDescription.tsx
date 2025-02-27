import { HTMLAttributes } from "react";

interface CardDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    content: string
}

export function CardDescription({ content, ...props }: CardDescriptionProps) {
    return (
        <p className="text-gray-600 mt-1 text-xs" {...props}>
            {content}
        </p>
    )
}