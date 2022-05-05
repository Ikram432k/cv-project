import React from "react";

const GeneralView = (props) =>{
      const { info } = props;
  
      return(
        <div>
            <h3>{info.Fname}</h3>
        </div>
      ); 
  };
export default GeneralView;