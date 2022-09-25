import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import Carousel from '../Carousel'
export default {
  title: 'Containers/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

export const BasicCarousel: ComponentStoryObj<typeof Carousel> = {}
