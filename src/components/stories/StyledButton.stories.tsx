import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { expect } from '@storybook/jest'
import { screen, userEvent } from '@storybook/testing-library'

import StyledButton from '../StyledButton'
export default {
  title: 'Controls/Button',
  component: StyledButton,
  args: {
    text: 'Hello',
  },
} as ComponentMeta<typeof StyledButton>

export const LightStyledButton: ComponentStoryObj<typeof StyledButton> = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
  },
  args: {
    type: 'light',
  },
}

export const DarkStyledButton: ComponentStoryObj<typeof StyledButton> = {
  args: {
    type: 'dark',
  },
}
