import { HTMLAttributes, useEffect } from "react"
import Table from "./Table"

interface TableLineProps extends HTMLAttributes<HTMLTableRowElement> {
    sectionName: string
    rowContent: string[]
}

export default function TableRow({ sectionName, rowContent, ...props }: TableLineProps) {

    async function handleDelete(itemName: string) {

        if (!continueToDelete()) return

        const res = await fetch(`/api/cardapio/items/delete?sect=${sectionName}&name=${itemName}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            window.location.reload()
        }
    }

    function continueToDelete() {
        return confirm('Você deseja apagar está sessão?')
    }

    return (
        <tr key={crypto.randomUUID()} className="border-b border-x border-gray-200 hover:bg-gray-100" {...props}>
            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <span className="font-medium">
                        {rowContent[0]}
                    </span>
                </div>
            </td>
            {
                rowContent.map((content, index) => {
                    if (index == 0) return
                    return <Table.cell content={rowContent[index]} key={crypto.randomUUID()} />
                })
            }
            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                    
                    <button onClick={() => handleDelete(rowContent[0])} className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                        <i className="fas fa-trash-alt">
                        </i>
                    </button>
                </div>
            </td>
        </tr>
    )
}