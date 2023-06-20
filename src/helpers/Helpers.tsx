import { CommonItem, ItemType, hasName } from "../Types";

export const camelCaseTrim = (string: string) => {
  let result = '';
  const wordArr = string.split(/\s+/);
  const exceptions = ['of', 'de', 'and'];

  for (let word of wordArr) {
    if (word) {
      // Remove exceptions
      result += (exceptions.includes(word)) ? word : word[0].toUpperCase() + word.slice(1);
      // Add space unless word at end of string
      result += (wordArr.indexOf(word) !== wordArr.length - 1) ? ' ' : '';
    }
  }

  return result;
}

export const formatPrice = (price: number): string => {
  const roundedPrice = Math.round(price)
  if (roundedPrice % 100 === 0) {
    return `$${roundedPrice/100}.00`;
  } else if (roundedPrice % 10 === 0) {
    return `$${roundedPrice/100}0`
  } else {
    return `$${roundedPrice/100}`
  }
}

export const sortAZ = (a: hasName, b: hasName): number => {
  console.log('sort A -> Z');
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
}

export const sortNewOld = (a: ItemType, b: ItemType): number => {
  console.log('sort New -> Old');
  const orderA = a.order ? a.order : 0;
  const orderB = b.order ? b.order : 0;
  return (orderA < orderB) ? -1 : (orderA > orderB) ? 1 : 0;
}
export const sortOldNew = (a: ItemType, b: ItemType): number => {
  console.log('sort Old -> New');
  const orderA = a.order ? a.order : 0;
  const orderB = b.order ? b.order : 0;
  return (orderA > orderB) ? 1 : -1;
}

export const sortByCategory = (a: CommonItem, b: CommonItem): number => {
  if (a.category && b.category) {
    return (a.category < b.category) ? -1 : (a.category > b.category) ? 1 : 0;
  } else {
    return 0;
  }
}

export const isPriceInvalid = (price: string): boolean => {
  return price.match(/^(\d*\.{0,1}\d{0,2})$/) ? false : true;
}

export const isPriceEmpty = (price: string): boolean => {
  return price.match(/^$/) ? true : false;
}