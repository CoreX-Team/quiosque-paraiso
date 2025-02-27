import { HTMLAttributes, ReactNode } from "react";

interface TableSectionProps extends HTMLAttributes<HTMLDivElement>{
    sectionName: string
    children: ReactNode
}

export default function TableSection({ sectionName, children, ...props }: TableSectionProps) {
    return (
        <div className="flex-1 p-6" {...props}>
            <section className="bg-white shadow rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">
                    {sectionName}
                </h2>
                {children}
            </section>
        </div>
    );
}