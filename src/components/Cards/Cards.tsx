import { FC } from "react"

interface CardsProps {
    todo?: any;
    showCards?: boolean;
}

export const Cards: FC<CardsProps> = ({todo, showCards}) => {
console.log(showCards)
    return (
        <div>
            {showCards &&
                <>
                    cards here
                </>
            }
        </div>
    )
}
