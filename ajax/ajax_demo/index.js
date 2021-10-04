let url = "/rest/index.php";

console.log("sending request");
fetch(url).then(response => {
    console.log("request response arrived :", response);
    //autre instructions ...
});
console.log("request sent");

console.log("continuing script execution ... ");
console.log("anothers instructions ... ");
let bp = true;

// //get the text
// fetch(url).then(response => response.text())
//           .then(text => {
//                     console.log("request response parsed in text format :", text);
//           })
//           .catch(error => console.log("request response error :", error));

// //get the json
// fetch(url).then(response => response.json())
//           .then(json => {
//                     console.log("request response parsed in json format :", json);
//           })
//           .catch(error => console.log("request response error :", error));

// //promise
// let promise = fetch(url);
// promise.then(response => console.log("request response arrived :", response));
// let bp = true;

// //async / await
// let sendRequest = async (url) => {
//     let response = await fetch(url);
//     if (response.ok) { // if HTTP-status is 200-299
//         let text = await response.text();
//         console.log(text);
//     } else {
//         console.log("HTTP-Error: " + response.status);
//     }
// }
// sendRequest(url);

// //send post data
// let user = {
//     name: 'John',
//     surname: 'Smith'
// };

// let options = {
//     method: 'post',
//     body: JSON.stringify(user)
// };

// fetch(url, options).then(resp => resp.json()).then(json => console.log(json));