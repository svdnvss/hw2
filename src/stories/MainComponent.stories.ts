import type { Meta, StoryObj } from '@storybook/react';
import {MainComponent} from "../components/MainComponent";

const meta = {
  title: 'MainComponent',
  // @ts-ignore
  component: MainComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  args: {
  },
};
