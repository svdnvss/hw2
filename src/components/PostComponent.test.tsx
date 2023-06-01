import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import {PostComponent} from './PostComponent';

describe('CounterComponent', () => {
    it('Пропсы доходят правильно', () => {
        const post = {
            postId: 1,
            id: 1,
            name: "username",
            email: "Eliseo@gardner.biz",
            body: "post content"
        };
        render(<PostComponent post={post} />);
        expect(screen.getByTestId('id')).toHaveTextContent(post.id + '.')
        expect(screen.getByTestId('name')).toHaveTextContent(post.name)
    });
});
