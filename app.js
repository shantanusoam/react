import React from 'react';
import  ReactDOM  from 'react-dom/client';
const parent=React.createElement("div",{id:"parent"},
  [ React.createElement("div",{id:"child1"},
     [  React.createElement("h1",{},"h1 tag "),
        React.createElement("h2",{},"h2 tag "),
        React.createElement("p",{id:"p"},"this is paragraph ")]),

    React.createElement("div",{id:"child2"},
  [  React.createElement("h1",{},"h1 tag "),
     React.createElement("h2",{},"h2 tag "),
    React.createElement("p",{id:"p"},"this is paragraph 2gi") ]),
   ]
     );

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// hi bro hru 
