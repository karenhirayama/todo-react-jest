import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe("Input Component", () => {
    it("Rendered Input", () => {
        render(<Input />);
        const input = screen.getByTestId('inputTodo');
        expect(input).toBeTruthy();
    });
    
    it("Get input change", () => {
        render(<Input/>);
        const input = screen.getByTestId('inputTodo');
        const wordInputTest = 'Word Input';
        fireEvent.change(input, {target: {value: wordInputTest}})
    });
  })
