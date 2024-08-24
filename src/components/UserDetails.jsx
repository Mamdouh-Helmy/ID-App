import { faCakeCandles, faLocationDot, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */ 
const UserDetails = ({ details }) => {
  return (
    <div className="all-box">
      <div className="box">
      قدرنا نعرف الأتي    
      </div>
      <div className="box">
        <div className="text-content">
        <div className="content">
          <FontAwesomeIcon icon={faVenusMars} className="icon-content"/>
          </div>
            النوع
        </div>
        <div className="details">
          {details.gender}
        </div>
        
      </div>
      <div className="box">
        <div className="text-content">
          <div className="content">
            <FontAwesomeIcon icon={faLocationDot} className="icon-content"/>
          </div>
          محل الإقامه
        </div>
        <div className="details">
          {details.location}
        </div>
        
      </div>
      <div className="box">
        <div className="text-content">
        <div className="content">
          <FontAwesomeIcon icon={faCakeCandles} className="icon-content"/>
        </div>
          تاريخ الميلاد
        </div>
        <div className="details">
          {details.histroy}
        </div>
        
      </div>
    </div>
  );
};

export default UserDetails;
