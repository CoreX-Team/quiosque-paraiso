import { HTMLAttributes, ReactNode } from "react"

interface SectionRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function SectionRoot({ children, ...props }: SectionRootProps) {
    return (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14" {...props}>
            {children}
        </section>
    )
}