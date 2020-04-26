export const filterOptions = [
    {
        label: "Calendar",
        value: "calendar"
    },
    {
        label: "Notes",
        value: "notes"
    }
]

export const navTimelineOptions = [
    {
        label: "Previous",
        value: "previous"
    },
    {
        label: "Current",
        value: "current"
    },
    {
        label: "Next",
        value: "next"
    }
]

export const urls = {
    user: {
        register: "http://localhost:3200/api/user/register",
        login: "http://localhost:3200/api/user/login"
    },
    task: {
        create: "http://localhost:3200/api/task/create",
        list: "http://localhost:3200/api/task/list"
    },
    upload: "http://localhost:3200/api/upload"
}

export function QueryStringToJSON() {            
    var pairs = window.location.search.slice(1).split('&');
    
    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
}

export const defaults = {
    label: "Work",
    status: "Todo"
}