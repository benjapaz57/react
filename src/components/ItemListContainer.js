import { eventWrapper } from "@testing-library/user-event/dist/utils";

const ItemListContainer = ({greeting}) => {
    return (
        <eventWrapper>{greeting}</eventWrapper>
    )
}

export default ItemListContainer;