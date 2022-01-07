import { HISTORY_MOCK } from './constants'

export const endpointMock = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ data: { data: HISTORY_MOCK } }), 500)
  })
