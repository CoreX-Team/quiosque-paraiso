export interface CardapioSection {
  sectionName: string
  items: CardapioSectionItem[]
}

export interface CardapioSectionItem {
  name: string
  description: string
  originalPrice: number
  discount: number
  price?: number
  currentPrice: number
  image?: string
  grande?: number | string
  pequena?: number | string
}