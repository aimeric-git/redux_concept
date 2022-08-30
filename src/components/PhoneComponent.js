import React from "react";
import { connect } from "react-redux";
import { buyPhone } from "../redux/phone/actionPhone";

const PhoneComponent = (props) => {
  console.log(props);
  return (
    <div className="container">
      <p>
        Nombre de téléphone: <span>{props.phones}</span>
      </p>
      <button onClick={() => props.buyPhone()}>Acheter</button>
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
