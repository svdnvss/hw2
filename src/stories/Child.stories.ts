import type { Meta, StoryObj } from '@storybook/react';
import {Child} from "./Child";

const meta = {
  title: 'Child',
  component: Child,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Child>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};

export const LoggedOut: Story = {};
