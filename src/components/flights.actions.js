import { fetchFlightsList  } from "./flightGateway";

export const ARRIVAL_LIST_RECEVEID = "FLIGHTS/ARRIVAL_LIST_RECEVEID";
export const DEPARTURE_LIST_RECEIVED = "FLIGHTS/DEPARTURE_LIST_RECEIVED";

export const arrivalListReceived  = (tasksList) => {
    const action = {
        type: ARRIVAL_LIST_RECEVEID,
        payload: {
            
        },
    };

    return action;
};
export const departureListReceived   = (tasksList) => {
    const action = {
        type: DEPARTURE_LIST_RECEIVED,
        payload: {
            
        },
    };

    return action;
};


