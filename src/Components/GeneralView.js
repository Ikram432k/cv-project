import React from "react";

const GeneralView = (props) =>{
      const { infos } = props;
  
      return(
          <ul>
              {infos.map((info)=>{
                  return<li key={info.id}>{info.Fname}</li>
              })}
          </ul>
      );
  };
export default GeneralView;