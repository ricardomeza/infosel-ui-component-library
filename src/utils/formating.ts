export const numberFormat = (value: string) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(value))

export const numberToPercentage = (value: string) =>
  Number(Number(value) / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
