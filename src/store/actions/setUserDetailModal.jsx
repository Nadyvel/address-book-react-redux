const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';


// Actions:
const openModal = () => ({
    type: OPEN_MODAL,
    payload: true
});

const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: false
});
