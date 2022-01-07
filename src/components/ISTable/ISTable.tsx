import classNames from 'classnames'
import React, { ReactNode, useState } from 'react'
import { IISTable, IISTableData } from './interface'
import './ISTable.scss'

const ISTable = ({ headers, data, logos, children }: IISTable) => (
  <table className="istable">
    <thead>
      <tr>
        {headers.map((item: string, index: number) => (
          <th key={index}>{item}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item: IISTableData) => (
        <React.Fragment key={item.id}>
          <NewRow row={item} logos={logos}>
            {children}
          </NewRow>
        </React.Fragment>
      ))}
    </tbody>
  </table>
)

const NewRow = ({ row, logos, children }: any) => {
  const [open, setOpen] = useState(false)

  const getLogo = (id: string) => logos[id.toLowerCase()]

  const numberFormat = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

  const numberToPercentage = (value: number) =>
    Number(value / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })

  return (
    <React.Fragment>
      <tr className={row.priceClassName} onClick={() => setOpen(!open)}>
        <td>
          <img src={getLogo(row.symbol)} alt="" />
          <div>
            {row.name}
            <br />
            {row.symbol}
          </div>
        </td>
        <td>{numberFormat(row.priceUsd)}</td>
        <td>{numberToPercentage(row.changePercent24Hr)}</td>
      </tr>
      <tr>
        <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <div className={classNames('collapse', { open })}>{children}</div>
        </td>
      </tr>
    </React.Fragment>
  )
}

export default ISTable
