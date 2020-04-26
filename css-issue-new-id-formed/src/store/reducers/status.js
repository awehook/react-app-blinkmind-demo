const defaultState = {
    activeStatus: "Todo",
    data: [{
        label: "Todo"
    }, {
        label: "Doing"
    }, {
        label: "Done"
    }]
}

const status = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_STATUS':
            return {
                ...state,
                activeStatus: action.activeStatus
            }
        default:
            return state
    }
}

export default status;