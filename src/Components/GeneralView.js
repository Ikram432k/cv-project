import React from "react";

const GeneralView = (props) =>{
const { info } = props;
  
return(
        <div className="container">
          <div className="contactList">
            <h1 id="items">{info.Fname} {info.Lname}</h1>
            <div className="contact">
            {/* <i className="material-icons">call</i> */}
            <p id="items">{info.Pnumber}</p>
            </div>
            <div className="contact">
            {/* <i className="material-icons">mail_outline</i> */}
            <p id="items">{info.email}</p>
           </div>
           </div>
              <div className="edit">
                    <button className="editBtn" onClick={props.edit}>
                    <span className="material-icons editIcon">create</span>
                    </button>
              </div>
        </div>
      )
  }
export default GeneralView;