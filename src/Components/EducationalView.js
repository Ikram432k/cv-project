import React from "react";

const EducationalView = (props) =>{
// const { infos } = props;
return(
    <div>
        {props.infos.map((info,i)=>{
        return(
        <div key={i}>
            <h3>{info.title}</h3>
            <p>{info.Sfrom}-{info.Sto}</p>
            <h3>{info.Sname}</h3>
            <div className="editBtn">
            <span className="material-icons editIcon">create</span>
                <button onClick={props.edit} id={i}></button>
            </div>
        </div>
        )})}

    </div>
)
}
export default EducationalView;