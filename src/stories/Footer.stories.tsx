import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../app/layout/components/footer';
import React from 'react';
const StorybookComp: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ width: '100vw' }}>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
const meta = {
  title: 'App/Layout/Footer',
  component: StorybookComp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {},
};
