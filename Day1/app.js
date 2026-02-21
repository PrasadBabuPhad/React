const element= React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontsize:"30px",color:"pink"}},"Hello Coder Army");
const element2= React.createElement("h2",{id:"first",className:"Rahul",style:{backgroundColor:"black",fontsize:"30px",color:"pink"}},"Maja aya mujhe");

const div1=React.createElement('div',{},[element,element2]);

const Reactroot =ReactDOM.createRoot(document.getElementById('root'));

//Reactroot.render(element);
//Reactroot.render(element2);
Reactroot.render(div1);