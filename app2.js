import React from "react";
import  ReactDOM  from "react-dom";


const parent=React.createElement("div",{id:"parent"}, //pure react element
    
    [
        React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading"},"React Tutorials"),
        React.createElement("h1",{id:"heading"},"Lecture 10th"),
        React.createElement("p",{id:"p"},"Lecture on Parcel a Bundler")])  ,

        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{id:"heading"},"React second child"),
            React.createElement("h1",{id:"heading"},"another heading"),
            React.createElement("p",{id:"p"},"second paragraph")])
     
]);

//jsx defining react element 
const parent1=(<div id="parent"><div id="child1"><h1 id="heading">React Tutorials</h1> 
<h1 id="heading">Lecture 10th</h1>
<p id="p">Lecture on Parcel a Bundler</p> </div>
<div id="child2"><h1 id="heading">Heading of Second Child</h1>
    <h1 id="heading">Another Heading</h1>
    <p id ="p">Second Paragraph</p>
</div>
{parent} </div>);

//functional component returning jsx that define react element
const Parent2=()=>(<div id="parent"><div id="child1"><h1 id="heading">React Tutorials</h1> 
<h1 id="heading">Lecture 10th</h1>
<p id="p">Lecture on Parcel a Bundler</p> </div>
<div id="child2"><h1 id="heading">Heading of Second Child</h1>
    <h1 id="heading">Another Heading</h1>
    <p id ="p">Second Paragraph</p>
</div> </div>);

// functional component returning jsx that define react element
function Parent3() { return <div id="parent"><div id="child1"><h1 id="heading">React Tutorials</h1>  
<h1 id="heading">Lecture 10th</h1>
<p id="p">Lecture on Parcel a Bundler</p> </div>
<div id="child2"><h1 id="heading">Heading of Second Child</h1>
    <h1 id="heading">Another Heading</h1>
    <p id ="p">Second Paragraph</p>
</div> <Parent2/>
{parent1}
 </div>
 };

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Parent3/>);
    
