export type ItemType = {
  name: string,
  quantity: number,
  priceCents: number,
  hasTax?: boolean,
  notes?: string,
  checked: boolean
}

export const blankItem = {
  name: '',
  quantity: 1,
  priceCents: 0,
  hasTax: true,
  notes: '',
  checked: false
}

export const formatPrice = (price: number): string => {
  if (price % 100 === 0) {
    return `$${price/100}.00`;
  } else if (price % 10 === 0) {
    return `$${price/100}0`
  } else {
    return `$${price/100}`
  }
}

export type DialogType = {
  content: string,
  open: boolean
}

export type ItemForm = {
  name: string,
  price?: string,
  notes?: string
}