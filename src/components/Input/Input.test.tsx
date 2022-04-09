import { fireEvent, render, screen } from '@testing-library/react';
import { createRenderer } from 'react-dom/test-utils';
import { Input } from './Input';

describe("Input Component", () => {
    test("Rendered Input", () => {
        render(<Input />);
        const input = screen.getByTestId('inputTodo');
        expect(input).toBeTruthy();
    });
    
    test("Get input change", () => {
        render(<Input/>);
        const input = screen.getByTestId('inputTodo');
        const wordInputTest = 'Word Input';
        fireEvent.change(input, {target: {value: wordInputTest}})
    });

    test("Listen button input", () => {
        render(<Input />);
        const btnAdd = screen.getByTestId('btnAdd');
        fireEvent.click(btnAdd);
        expect(btnAdd).toBeTruthy();
    });

  })
