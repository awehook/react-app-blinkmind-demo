export const setStatus = (value) => ({
    type: 'SET_STATUS',
    activeStatus: value
});

export const setStatusMW = (e) => (dispatch) => {
    let status = e.target.innerText;
    console.log("value inside setStatusMW func", e);
    dispatch(setStatus(status));
}

export const addStatus = (value) => ({
    type: 'ADD_STATUS',
    label: value
})

export const addStatusMW = (value) => (dispatch) => {
    let label = value;
    dispatch(addStatus(label));
};

export const deleteStatus = (index) => ({
    type: 'DELETE_STATUS',
    index
})

export const deleteStatusMW = (index) => (dispatch) => {
    dispatch(deleteStatus(index));
};
