import React from "react";

const GeneralView = (props) =>{
      const { info } = props;
  
      return(
        <div>
        <div>
            <h3>{info.Fname} {info.Lname}</h3>
            <div className="contact">
            <i className="material-icons">call</i>
            <p>{info.Pnumber}</p>
            </div>
            <div className="contact">
            <i className="material-icons">mail_outline</i>
            <p>{info.email}</p>
        </div>
        </div>
                    <div className="editBtn">
                    <span className="material-icons editIcon">create</span>
                    <button onClick={props.edit}></button>
                </div>
        </div>
      ); 
  };
export default GeneralView;