const initialState = {
    carts: [],
};
export const AddItems = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM": return {
            ...state,
            carts:[action.payload]
        }     
        case "DELET_ITEM":
            return     state = state.filter((x)=> {
                return x.id !== action.payload.id
            })
        
        default: return state;
    }
}
