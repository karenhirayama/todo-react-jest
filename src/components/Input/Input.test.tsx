import { render } from '@testing-library/react';
import { Input } from './Input';

describe("Input Component", () => {
    it("Rendered Input", () => {
        const { getByTestId }: any = render(<Input />);
        const input = getByTestId('inputTodo');
        expect(input).toBeTruthy();
    })
})
