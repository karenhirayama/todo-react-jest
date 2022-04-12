import { FC } from "react"

interface CardsProps {
    todo?: any;
    showCards?: boolean;
}

export const Cards: FC<CardsProps> = ({todo, showCards}) => {

    return (
        <div
        data-testid='cardsId'
        >
            {showCards &&
                <div
                data-testid='todoContainer'
                >
                    {todo}
                </div>
            }
        </div>
    )
}
