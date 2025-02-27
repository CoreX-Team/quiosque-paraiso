import { HTMLAttributes, ReactNode } from "react";

interface TableRootProps extends HTMLAttributes<HTMLTableElement> {
    children: ReactNode;
}

export default function TableRoot({ children, ...props }: TableRootProps) {
    return (
        <table {...props}>
            {children}
        </table>
    )
}