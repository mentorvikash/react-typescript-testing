import React from "react";

interface IGreet4 {
  name?: string;
}
function Greet1(props: IGreet4) {
  return <div>hello {props.name ? props.name : "golu"}</div>;
}

export default Greet1;
