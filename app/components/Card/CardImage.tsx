import { FC, ImgHTMLAttributes } from "react"

interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
}

export const CardImage: FC<CardImageProps> = ({ src, ...props}) => {
    return (
        <img src={src} {...props} />
    )
}