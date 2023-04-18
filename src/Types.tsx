export type ItemType = {
  name: string,
  quantity: number,
  priceCents: number,
  hasTax?: boolean
}

export const blankItem = {
  name: '',
  quantity: 1,
  priceCents: 100,
  hasTax: true
}

export type DialogType = {
  content: string,
  open: boolean
}