import { FC, ReactNode } from "react"

type HeaderSubTitleProps =
    | { subtitle: string; children?: never }
    | { children: ReactNode | string; subtitle?: never }

export function HeaderSubtitle({ subtitle, children }: HeaderSubTitleProps) {
    return (
        <p className="text-gray-600 dark:text-white/80">
            {children? children: subtitle}
        </p>
    )
}