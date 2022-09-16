import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyTv } from '../redux/tv/actionTv';

const TvComponent = (props) => {

    const [totalTv, setTotalTv] = useState(1);

    const handleClick = () => {
        props.buyTv(totalTv);
    }
    return (
        <div>
            <h2>TV Component</h2>
            <p>Nombre de TV : {props.tv}</p>
            <div>
                <input type="text"
                    value={totalTv}
                    onChange={(e) => setTotalTv(e.target.value)}
                />
                <button onClick={handleClick}>Acheter TV</button>
            </div>
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
        buyTv: (totalTv) => dispatch(buyTv(totalTv))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TvComponent);