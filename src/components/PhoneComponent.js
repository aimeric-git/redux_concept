import React from 'react';
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

  const handleClick = () => {
    props.buyPhone();
  }

  return (
    <div className="container">
      <p>
        Nombre de téléphone: <span>{props.phones}</span>
      </p>
      <button onClick={handleClick}>Acheter</button>
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
    buyPhone: () => dispatch(buyPhone()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
