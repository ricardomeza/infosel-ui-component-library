export interface IISTable {
  headers: string[]
  data: IISTableData[]
  logos: Record<string, string>
  children?: ReactNode | null
}

export interface IISTableData {
  changePercent24Hr: string
  explorer: string | null
  id: string
  marketCapUsd: string
  maxSupply: string | null
  name: string
  priceUsd: string
  rank: string
  supply: string
  symbol: string
  volumeUsd24Hr: string
  vwap24Hr: string | null
  priceClassName?: string
}

export interface IISTableRow {
  data: IISTableData
  logos: Record<string, string>
  children?: ReactNode | null
}
