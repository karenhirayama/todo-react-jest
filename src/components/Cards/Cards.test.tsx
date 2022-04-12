import { fireEvent, render, screen } from '@testing-library/react';
import { Cards } from './Cards';

describe("Cards content", () => {
    test("Render Cards", () => {
        render(<Cards todo={'yes'} showCards={true} />);
        const cards = screen.getByTestId('cardsId');
        expect(cards).toBeTruthy();
    });


    test("Render todo", () => {
        render(<Cards todo={'yes'} showCards={true} />);
        const div = screen.getByTestId('todoContainer');
        expect(div).toBeTruthy();
    });

    test("Not render todo", () => {
        render(<Cards todo={'yes'} showCards={false} />);
        const div = screen.queryByTestId('todoContainer');
        expect(div).toBeFalsy();
    });
})