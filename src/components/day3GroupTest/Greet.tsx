import React from "react";

interface IGreet1 {
  name?: string;
}
function Greet1(props: IGreet1) {
  return <div>hello {props.name}</div>;
}

export default Greet1;
