import type { Meta, StoryObj } from '@storybook/react';
import {CounterComponent} from "../components/CounterComponent";

const meta = {
  title: 'CounterComponent',
  component: CounterComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CounterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Count1: Story = {
  args: {
    count: 1
  },
};
