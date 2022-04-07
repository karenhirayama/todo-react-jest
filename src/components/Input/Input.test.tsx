import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe("Input Component", () => {
    test("Rendered Input", () => {
        render(<Input />);
        const input = screen.getByTestId('inputTodo');
        expect(input).toBeTruthy();
    })
  })
