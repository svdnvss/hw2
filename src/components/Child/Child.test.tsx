import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import {Child} from './Child';

describe('Child', () => {
    it('Пропсы доходят правильно', () => {
        render(<Child number={3} />);
        expect(screen.getByTestId('child')).toHaveTextContent('3')
    });
});
