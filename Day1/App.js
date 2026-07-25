const heading = React.createElement("h1", 
    {id="heading", xyz="abc"},
   "hello from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);