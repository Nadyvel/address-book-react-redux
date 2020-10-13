// const initialState = {
//     userCard: []
// }
//
// const modalReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_MODAL': {
//             const { namespace, data, isVisible } = action.payload;
//             const newData = data || { ...state[namespace].data }; // copy old data if no new data was provided
//
//             // handling the edge case where namespace wasn't existing and no visibility was defined earlier
//             const oldIsVisible = state[namespace] ? state[namespace].isVisible : false;
//
//             // prevents an undefined "isVisible" from overwriting the visibility to "false" instead of not changing it
//             const newIsVisible = (isVisible === null || isVisible === undefined) ? oldIsVisible : isVisible;
//
//             return { ...state, [namespace]: { isVisible: newIsVisible, data: newData } };
//         }
//         default:
//             return state;
//     }
// };
//
// export default modalReducer;

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Set InitialState
const initialState = {
    modal: false
}

// Reducer
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, modal: action.payload };
        case CLOSE_MODAL:
            return { ...state, modal: action.payload };
        default:
            return state;
    }
}

export default modalReducer;