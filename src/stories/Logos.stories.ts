import type { Meta, StoryObj } from '@storybook/react';

import { Logos } from '../app/elements/logos/logo.tsx';
const meta = {
  title: 'App/Elements/Logos',
  component: Logos,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: ['AdCreativeLogo', 'AdCreativeText', 'AdCreative'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Logos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  args: {
    name: 'AdCreativeLogo',
    className: 'text-[40px]',
  },
};
