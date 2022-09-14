import React from 'react';
import {buyPhone} from '../redux/phone/actionPhone';
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
import { connect } from "react-redux";

const PhoneComponent = (props) => {
  console.log(props);

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

const mapStateToProps = (state) => {
  return {
    phones: state.phones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
