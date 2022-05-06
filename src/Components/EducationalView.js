import React from "react";

const EducationalView = (props) =>{
// const { infos } = props;
return(
    <div>
        {props.infos.map((info,i)=>{
        return(
        <div key={i}>
            <h3>{info.Sname}</h3>
            <h3>{info.title}</h3>
            <p>{info.Sfrom}-{info.Sto}</p>
            <div className="editBtn">
                <button onClick={props.edit} id={i}></button>
            </div>
        </div>
        )})}

    </div>
)
}
export default EducationalView;