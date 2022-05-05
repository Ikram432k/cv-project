import React from "react";

const GeneralView = (props) =>{
      const { info } = props;
  
      return(
        <div>
            <h3>{info.Fname}</h3>
            <h3>{info.Lname}</h3>
            <p>{info.Pnumber}</p>
            <p>{info.email}</p>
        </div>
      ); 
  };
export default GeneralView;