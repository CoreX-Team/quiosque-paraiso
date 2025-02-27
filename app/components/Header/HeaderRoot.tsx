import { FC, ReactNode } from "react"

interface HeaderRootProps {
    children: ReactNode
}

export const HeaderRoot: FC<HeaderRootProps> = ({children, ...props}) => {
    return (
        <header {...props} className="text-center mb-8">
            {children}
        </header>
    )
}