import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../app/layout/components/navigation';
import React from 'react';
const StorybookComp: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ width: '100vw' }}>
        <Navigation />
      </div>
    </BrowserRouter>
  );
};
const meta = {
  title: 'App/Layout/Navigation',
  component: StorybookComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {},
};
