const heading= React.createElement("h1",{id:"title"},"Namaste Everyone!");

//gives us react object
console.log(heading);
const root= ReactDOM.createRoot(document.getElementById("root"));

//passing a react element to the root
root.render(heading);