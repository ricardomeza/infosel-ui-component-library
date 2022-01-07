import classNames from 'classnames'
import React, { ReactNode, useState } from 'react'
import { numberFormat, numberToPercentage } from '../../utils/formating'
import './ISTable.scss'

const ISTable = ({ children, data, headers, logos }: IISTable) => (
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
          <NewRow {...{ data, logos }}>{children}</NewRow>
        </React.Fragment>
      ))}
    </tbody>
  </table>
)

const NewRow = ({
  children,
  data: { changePercent24Hr, name, priceClassName, priceUsd, symbol },
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
          <div className={classNames('collapse', { open })}>{children}</div>
        </td>
      </tr>
    </React.Fragment>
  )
}

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

export default ISTable
