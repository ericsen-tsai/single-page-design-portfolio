import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { expect } from '@storybook/jest'
import { screen, userEvent } from '@storybook/testing-library'

import Pagination from '../Pagination'
export default {
  title: 'Controls/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

export const BasicPagination: ComponentStoryObj<typeof Pagination> = {
  play: async ({ args }) => {
    const [backButton, nextButton] = screen.getAllByRole('button')
    await userEvent.click(backButton)
    await expect(args.onBackwardButtonClick).toHaveBeenCalled()

    await userEvent.click(nextButton)
    await expect(args.onForwardButtonClick).toHaveBeenCalled()
  },
}
