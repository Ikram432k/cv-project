import React from "react";

const WorkView = (props) =>{
// const { infos } = props;
return(
    <div >
        {props.infos.map((info,i)=>{
        return(
            <div key={i} className="container">
            <div className="containerList">
            <h3 id="items">{info.Wname}</h3>
            <h3 id="items">{info.Ptitle}</h3>
            <p id="items">{info.Wfrom} - {info.Wto}</p>
            <p id="items">{info.tasks}</p>
            </div>
            <div className="edit">
                <button className="editBtn" onClick={props.edit} id={i}>
                <span className="material-icons editIcon">create</span>
                </button>
            </div>
        </div>
        )})}

    </div>
)
}
export default WorkView;