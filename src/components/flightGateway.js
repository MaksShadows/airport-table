const baseUrl  = "https://api.iev.aero/api/flights";


export const fetchFlightsList = () =>
  fetch(`${baseUrl}`).then((response) => {
    if (response.ok) return response.json();
    throw new Error("Failed  flights");
  });
