import type { Meta, StoryObj } from '@storybook/react';

import Button from '../app/elements/button';
const meta = {
  title: 'App/Elements/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Overwritten description',
    },
    icon: {
      options: ['Airplane', 'CheckCircle', 'Click', 'CrossSquare', 'Down', 'Figma', 'Github', 'Linkedin', 'Whatsapp'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    label: 'Button',
  },
};
