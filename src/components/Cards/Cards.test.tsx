import { fireEvent, render, screen } from '@testing-library/react';
import { Cards } from './Cards';

describe("Cards content", () => {
    test("Render Cards", () => {
        render(<Cards todo={'yes'} showCards={true} />);
        const cards = screen.getByTestId('cardsId');
        expect(cards).toBeTruthy();
    });
})