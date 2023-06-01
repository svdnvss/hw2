import type { Meta, StoryObj } from '@storybook/react';
import {PostComponent} from "../components/PostComponent";

const meta = {
  title: 'PostComponent',
  component: PostComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PostComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Post1: Story = {
  args: {
    post: {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
  },
};
