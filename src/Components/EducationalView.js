import React from "react";

const EducationalView = (props) =>{
const { infos } = props;
return(
    <div>
        {infos.map((info)=>{
        return(
        <div >
            <h3>{info.Sname}</h3>
            <h3>{info.title}</h3>
            <p>{info.Sfrom}-{info.Sto}</p>
        </div>
        )})}
    </div>
)
}
export default EducationalView;