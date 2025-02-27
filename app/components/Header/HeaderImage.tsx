import { FC, ImgHTMLAttributes } from "react"

interface HeaderImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
}
export const HeaderImage: FC<HeaderImageProps> = (props) => {
    return (
        <div className="mb-8">
            <img {...props} />
        </div>
    )
}