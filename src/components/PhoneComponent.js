import React, {useState} from 'react';
import {buyPhone} from '../redux/phone/actionPhone';
import { connect } from "react-redux";

// import { useSelector, useDispatch } from 'react-redux';

// const PhoneComponent = () => {

//   const phones = useSelector(state => state.phones);
//   const dispatch = useDispatch();
//   return (
//         <div className="container">
//           <p>
//             Nombre de téléphone: <span>{phones}</span>
//           </p>
//           <button onClick={() => dispatch(buyPhone())}>Acheter</button>
//         </div>
//       );
// }
// export default PhoneComponent;

// utilisation de mapStateToPRops et mapDispatchToProps

const PhoneComponent = (props) => {

  const [totalPhone, setTotalPhone] = useState(1);

  const handleClick = () => {
    props.buyPhone(totalPhone);
  }

  return (
    <div className="container">
      <p>
        Nombre de téléphone: <span>{props.phones}</span>
      </p>
      <div>
        <input type="text"
          value={totalPhone}
          onChange={(e) => setTotalPhone(e.target.value)} 
        />
        <button onClick={handleClick}>Acheter</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    phones: state.phone.phones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: (totalPhone) => dispatch(buyPhone(totalPhone)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
