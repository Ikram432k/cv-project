import React from "react";

const GeneralView = (props) =>{
      const { info } = props;
  
      return(
        <div>
        <div>
            <h1>{info.Fname} {info.Lname}</h1>
            <div className="contact">
            <i className="material-icons">call</i>
            <p>{info.Pnumber}</p>
            </div>
            <div className="contact">
            <i className="material-icons">mail_outline</i>
            <p>{info.email}</p>
        </div>
        </div>
              <div className="edit">
                    <button className="editBtn" onClick={props.edit}>
                    <span className="material-icons editIcon">create</span>
                    </button>
                </div>
        </div>
      ); 
  };
export default GeneralView;