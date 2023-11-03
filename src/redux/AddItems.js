const initialState = {
    carts: [],
};
export const AddItems = (state = initialState, {type,payload}) => {
    switch (type) {
        case "ADD_ITEM": return {
            ...state,
            carts:[...state.carts,payload]
        }     
        case "DELETE_ITEM":
            const data = state.carts.filter((i) => i.id !== payload.id);
        return { ...state, carts: data };
        case "RESET":
            return {
                state,
                carts:[]
            }
        
        default: return state;
    }
}
