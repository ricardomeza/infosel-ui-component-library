import ISChart from '../Chart/ISChart'
import React, { useState } from 'react'
import { numberFormat, numberToPercentage } from '../../utils/formating'
import './ISTable.scss'

const ISTable = ({ data, endpoint, headers, logos }: IISTable) => (
  <table className="istable">
    <thead>
      <tr>
        {headers.map((item: string, index: number) => (
          <th key={index}>{item}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((data: IISTableData) => (
        <React.Fragment key={data.id}>
          <NewRow {...{ data, logos, endpoint }} />
        </React.Fragment>
      ))}
    </tbody>
  </table>
)

const NewRow = ({
  data: { changePercent24Hr, id, name, priceClassName, priceUsd, symbol },
  endpoint,
  logos
}: IISTableRow) => {
  const [open, setOpen] = useState(false)
  const getLogo = (id: string) => logos[id.toLowerCase()]

  return (
    <React.Fragment>
      <tr className={priceClassName} onClick={() => setOpen(!open)}>
        <td>
          <img src={getLogo(symbol)} alt="" />
          <div>
            {name}
            <br />
            {symbol}
          </div>
        </td>
        <td>{numberFormat(priceUsd)}</td>
        <td>{numberToPercentage(changePercent24Hr)}</td>
      </tr>
      <tr>
        <td className="collapse-wrapper" colSpan={3}>
          {open && <ISChart assetId={id} {...{ endpoint }} />}
        </td>
      </tr>
    </React.Fragment>
  )
}

export interface IEndpointArgs {
  assetId: string
  interval: string
}

export interface IISTable {
  headers: string[]
  data: IISTableData[]
  logos: Record<string, string>
  endpoint: ({ assetId, interval }: IEndpointArgs) => Promise<unknown>
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
  endpoint: ({ assetId, interval }: IEndpointArgs) => Promise<unknown>
}

export default ISTable
