import * as React from 'react'
import ISTable from '../ISTable'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DATA_MOCK, HEADERS_MOCK, LOGOS_MOCK } from '../constants'

export default {
  title: 'ISTable',
  component: ISTable
} as ComponentMeta<typeof ISTable>

const Template: ComponentStory<typeof ISTable> = () => (
  <ISTable headers={HEADERS_MOCK} data={DATA_MOCK} logos={LOGOS_MOCK}></ISTable>
)

// DEFAULT .............................................................................................................
export const Default = Template.bind({})
