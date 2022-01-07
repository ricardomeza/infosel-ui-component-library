import * as React from 'react'
import ISChart from '../ISChart'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { endpointMock } from '../../ISTable/helpers'

export default {
  title: 'ISChart',
  component: ISChart
} as ComponentMeta<typeof ISChart>

const Template: ComponentStory<typeof ISChart> = () => <ISChart assetId="bitcoin" endpoint={endpointMock} />

// DEFAULT .............................................................................................................
export const Default = Template.bind({})
