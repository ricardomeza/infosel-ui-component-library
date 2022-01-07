import React, { useEffect, useRef, useState } from 'react'
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts'
import { IEndpointArgs } from '../ISTable/ISTable'

const ISChart = ({ assetId, endpoint }: ISChart) => {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const bodyEl = document.getElementsByTagName('body')[0]
  const chartgWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>
  let chart: IChartApi
  let lineSeries: ISeriesApi<'Line'>
  let resizeObserver: ResizeObserver

  useEffect(() => {
    if (!dataLoaded) {
      chart = createChart(chartgWrapperRef.current)
      lineSeries = chart.addLineSeries()

      setIsLoading(true)
      endpoint({ assetId, interval: 'm5' })
        .then((res: any) => {
          const dataFiltered: any = res.data.data.map((item: any) => ({ time: item.time, value: item.priceUsd }))
          lineSeries.setData(dataFiltered)
          setError(false)
          setDataLoaded(true)
          setIsLoading(false)
        })
        .catch(() => {
          setError(true)
          setIsLoading(false)
        })

      resizeObserver = new ResizeObserver((entries) => {
        const cr = entries[0].contentRect
        chart.resize(cr.width, 500)
      })
      resizeObserver.observe(bodyEl)
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      {isLoading && !error && (
        <p style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading…</p>
      )}
      <div ref={chartgWrapperRef} className="chart-wrapper"></div>
    </>
  )
}

export interface ISChart {
  assetId: string
  endpoint: ({ assetId, interval }: IEndpointArgs) => Promise<unknown>
}

export interface IHistoryData {
  priceUsd: string
  time: number
  circulatingSupply: string
  date: string
}

export interface IEndpointRes {
  data: {
    data: IHistoryData
  }
}

export default ISChart
