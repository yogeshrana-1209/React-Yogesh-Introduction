import React from "react";
import ReactDOM from "react-dom/client";

function demo() {
    const inputType = 'number';
    const minValue = 5;
    //const maxValue = 100;
    const color = {color:'red'};
    //const border = {border:'3px groove blue'};

  return (
    <div>
        {/* <input 
        type={inputType} 
        min={minValue} 
        max={maxValue}
        style={{color:'red'}}
        list= {[1,2,3]}
        /> */}
        
        <div>
          <h3 style={{textDecoration:'none',paddingTop:'5px'}}>Inputbox that Checks the Spellings</h3>
          <input spellCheck={true} autoCapitalize={true} placeholder="enter name"/>
          {/* <input placeholder="hi there"/> */}
        </div>
        <br/>
        <textarea autoFocus={true} />
    </div>
  )
}

export default demo