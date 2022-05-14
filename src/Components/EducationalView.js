import React from "react";

function EducationalView(props){
// const { infos } = props;
return(
    <div >
        {props.infos.map((info,i)=>{
        return(
        <div key={i} className="container">
            <div className="containerList">
            <h3 id="items">{info.title}</h3>
            <p id="items">{info.Sfrom} - {info.Sto}</p>
            <h3 id="items">{info.Sname}</h3>
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
export default EducationalView;