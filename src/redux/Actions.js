export const ADD_ITEM = (item) => {
    return {
        type: "ADD_ITEM",
        payload:item,
    }
}
export const DELET_ITEM = (item) => {
    return {
        type: "DELET_ITEM",
        payload: item,
    }
}