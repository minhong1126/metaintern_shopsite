import { useState } from "react";

interface inputType{
  label: string;
  type: string;
}


function InputComponent(props: inputType){
  const [value, setValue] = useState();

  
  return(
    <>
    <div>
      <label> {props.label} </label>
      <input type="number" value={value}/>
    </div>
    </>
  );
}

export default InputComponent;