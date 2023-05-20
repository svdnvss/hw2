import type { Meta, StoryObj } from '@storybook/react';
import {Main} from "./Main";

const meta = {
  title: 'Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};

export const LoggedOut: Story = {};
