import type { Meta, StoryObj } from '@storybook/react';

import { Icons } from '../components/elements/icons/icon.tsx';
const meta = {
  title: 'Components/Elements/Icons',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: ['Airplane', 'CheckCircle', 'Click', 'CrossSquare', 'Down', 'Figma', 'Github', 'Linkedin', 'Whatsapp'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    name: 'Airplane',
    className: 'text-[40px]',
  },
};
