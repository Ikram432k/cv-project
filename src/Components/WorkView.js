import React from "react";

const WorkView = (props) =>{
// const { infos } = props;
return(
    <div>
        {props.infos.map((info,i)=>{
        return(
        <div key={i}>
            <h3>{info.Wname}</h3>
            <h3>{info.Ptitle}</h3>
            <p>{info.Wfrom}-{info.Wto}</p>
            <p>{info.tasks}</p>
            <div className="editBtn">
                <button onClick={props.edit} id={i}></button>
            </div>
        </div>
        )})}

    </div>
)
}
export default WorkView;