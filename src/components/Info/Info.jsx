import { useNavigate } from "react-router-dom";

function Info({description,infoImg,infoHeader,onClickBack}){
  const navigate=useNavigate();
  return(
    <div className="info">
    <img src={infoImg} alt="Картинка" className="info__img" />
    <h3 className="info__header">{infoHeader}</h3>
    <p className="info__description">{description}</p>
    {window.location.pathname ==='/' ? 
    <button className="empty__btn btn" onClick={onClickBack}>Назад</button> 
    : <button className="empty__btn btn" onClick={()=> navigate(-1)}>Назад</button>}
    
    </div>
    
  )
}
export default Info;