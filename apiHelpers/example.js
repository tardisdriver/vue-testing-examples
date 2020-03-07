import { requestOptions, handleResponse } from "./helpers";

function getSomeData() {
  const endpoint = `${requestOptions.apiURL()}/my_endpoint/`;
  return fetch(endpoint, requestOptions.get()).then(handleResponse);
}

export const apiHelperExample = { getSomeData };

// ./helpers would look something like.....
//
// export const requestOptions = {
//     get() {
//         return {
//             method: "GET",
//             ...Headers()
//         }
//     }
//     // repeat for other reqs
// }

// export function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         return data;
//     }
// }
