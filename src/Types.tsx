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
  priceCents: 0,
  hasTax: true,
  notes: ''
}

export type DialogType = {
  content: string,
  open: boolean
}

export type ItemForm = {
  name: string,
  price: string,
  notes: string
}