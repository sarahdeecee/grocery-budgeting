export interface hasName {
  name: string;
}

export interface hasCategory {
  category: string;
}

export interface ItemType extends hasName {
  name: string,
  quantity: number,
  priceCents: number,
  tax: number,
  notes?: string,
  category?: string,
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
  tax: string,
  category: string,
  quantity: string
}

export type CommonItem = {
  inputValue?: string,
  name: string,
  category?: string
}