import * as React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import {Main} from './Main';

describe('Main', () => {
    afterEach(cleanup);
    it('Количество дочерних компонентов выводится правильное (1)', () => {
        render(<Main numsArray={[0]} />);
        expect(screen.getAllByTestId('child')).toHaveLength(1)
    });
    it('Количество дочерних компонентов выводится правильное (2)', () => {
        render(<Main numsArray={[0, 1, 2]} />);
        expect(screen.getAllByTestId('child')).toHaveLength(3)

    });
    it('Нажатие кнопки add добавляет новый дочерний компонент', () => {
        render(<Main numsArray={[0, 1, 2]} />);
        fireEvent.click(screen.getByTestId('add-button'))
        expect(screen.getAllByTestId('child')).toHaveLength(4)
    });
    it('Нажатие кнопки del добавляет новый дочерний компонент', () => {
        render(<Main numsArray={[0, 1, 2]} />);
        fireEvent.click(screen.getByTestId('delete-button'))
        expect(screen.getAllByTestId('child')).toHaveLength(2)
    });
});
