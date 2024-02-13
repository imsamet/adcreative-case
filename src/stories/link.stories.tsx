import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ADLink from '../app/elements/link';
import React from 'react';
const StorybookComp: React.FC = (props: any) => {
  return (
    <BrowserRouter>
      <ADLink {...props} />
    </BrowserRouter>
  );
};
const meta = {
  title: 'App/Layout/Link',
  component: StorybookComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Overwritten description',
    },
    to: {
      control: 'text',
      description: 'Overwritten description',
    },
  },
} satisfies Meta<typeof ADLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    label: 'Link',
    to: '/',
  },
};
