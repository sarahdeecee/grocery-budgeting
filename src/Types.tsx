export type ItemType = {
  name: string,
  quantity: number,
  priceCents: number,
  tax: number,
  notes?: string,
  checked: boolean
}

export const blankItem = {
  name: '',
  quantity: 1,
  priceCents: 0,
  tax: 13,
  notes: '',
  checked: false
}

export type DialogType = {
  content: string,
  open: boolean
}

export type ItemForm = {
  name: string,
  price?: string,
  notes?: string,
  tax: string
}