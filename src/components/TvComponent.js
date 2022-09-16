import React from 'react';
import { connect } from 'react-redux';
import { buyTv } from '../redux/tv/actionTv';

const TvComponent = (props) => {
    const handleClick = () => {
        props.buyTv();
    }
    return (
        <div>
            <h2>TV Component</h2>
            <p>Nombre de TV : {props.tv}</p>
            <button onClick={handleClick}>Acheter TV</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tv : state.television.tv
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyTv: () => dispatch(buyTv())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TvComponent);