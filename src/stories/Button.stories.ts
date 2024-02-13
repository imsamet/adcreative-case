import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/elements/button';
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Button',
  },
};
