import type { Meta, StoryObj } from '@storybook/react';

import Autocomplate from '../app/elements/autocomplate';
import { AUTOCOMPLATE_DATA } from './core/_constants';
const meta = {
  title: 'App/Elements/Autocomplate',
  component: Autocomplate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {},
    loading: {},
  },
} satisfies Meta<typeof Autocomplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    data: AUTOCOMPLATE_DATA,
    loading: false,
  },
};
