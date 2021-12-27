import * as React from 'react'
import Button from '../'
import { BUTTON_TEXTS } from './constants'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// DEFAULT .............................................................................................................
export const Default = Template.bind({})
Default.args = { label: BUTTON_TEXTS.default, fullWidth: false }

// CLICK ME ............................................................................................................
export const ClickMe = Template.bind({})
ClickMe.args = { label: BUTTON_TEXTS.clickMe, fullWidth: false }
