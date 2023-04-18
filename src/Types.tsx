export type ItemType = {
  name: string,
  quantity: number,
  priceCents: number,
  hasTax?: boolean,
  notes?: string
}

export const blankItem = {
  name: '',
  quantity: 1,
  priceCents: 100,
  hasTax: true,
  notes: ''
}

export type DialogType = {
  content: string,
  open: boolean
}