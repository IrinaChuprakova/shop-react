import { useNavigate } from "react-router-dom";

function Info({description,infoImg}){
  const navigate=useNavigate();

  return(
    <div className="info">
    <img alt={infoImg} className="info__img"/>
    <p className="info__description">{description}</p>
    <button className="empty__btn btn" onClick={()=> navigate(-1)}>Назад</button>
    </div>
  )
}
export default Info;