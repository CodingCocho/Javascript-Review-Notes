let stringifyJSON = `{"users":[{"name":"Raul","age":22,"isProgrammer":true,"skills":["html","css","sass","javascript"],"address":{"city":"South Gate","state":"California","country":"United States"}},{"name":"Debra","age":21,"isProgrammer":true,"skills":["html","css","tailwind css","javascript"],"address":{"city":"San Diego","state":"California","country":"United States"}},{"name":"Isabella","age":23,"isProgrammer":true,"skills":["html","css","sass","tailwind css","javascript","react.js","firebase","next.js","redux"],"address":{"city":"San Diego","state":"California","country":"United States"}}]}`;
let list = "";

// fetch("/utilities/users.json")
// .then(response => response.json())
// .then(json => 
// {
//     json.users.forEach(user =>
//         {
//             list += `<li>${user.name}</li>`
//         })
//         document.getElementById("user-list").innerHTML = list;
// }) 

console.log(JSON.parse(stringifyJSON));

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => 
{
    json.forEach(todo => {
        list += `<li>${todo.title}</li>`
    });
    document.getElementById("user-list").innerHTML = list;
    console.log(json);
}) 