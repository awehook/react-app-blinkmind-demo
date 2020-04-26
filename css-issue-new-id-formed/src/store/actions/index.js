import { getEvents, createTask } from "../../services/task";
import { useHistory } from "react-router-dom";

export const updateEvents = (events) => ({
    type: 'UPDATE_EVENTS',
    events
});

export const addEvent = (task) => ({
    type: 'ADD_EVENT',
    event: { ...task }
})

export const setEvent = (data) => (dispatch) => {

    const { title, description, start, end } = data;
    console.log("inside setEvent, about to add event from modal", "title:", title, "description:", description, "start:", start, "end:", end);
    createTask(data).then(res => {
        console.log("res after saving the rask successfuloyy", res);
        if (res.status === "success") {
            data.id = res.id;
            dispatch(addEvent(data));
        }
    });
}

export const updateEventsList = (events) => (dispatch) => {

    return new Promise((resolve, reject) => {

        // get the list of events and set the events
        getEvents().then((res) => {
            console.log("response from getEvents function call", res);
            if (res && res.events) {
                res.events.forEach(element => {
                    element.start = new Date(element.start);
                    element.end = new Date(element.end);
                    console.log(element.start)
                    return element;
                });
                dispatch(updateEvents(res.events));
                resolve("success");
            } else {
                console.log("please login again, token expired");
                reject("fail");
            }
        });
    });
}