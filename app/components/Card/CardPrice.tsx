import { HTMLAttributes } from "react"

interface CardPriceProps extends HTMLAttributes<HTMLDivElement>{
    price: number | string
}

export function CardPrice({ price, ...props }: CardPriceProps) {
    return (
        <span className="text-gray-800 font-bold mt-2 text-sm" {...props}>
            {typeof price === "number" ? `R$ ${price.toFixed(2)}` : price}
        </span>
    )
}