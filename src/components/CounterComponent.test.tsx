import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import {CounterComponent} from './CounterComponent';

describe('CounterComponent', () => {
    it('Пропсы доходят правильно', () => {
        render(<CounterComponent count={3} />);
        expect(screen.getByTestId('count')).toHaveTextContent('3')
    });
});
