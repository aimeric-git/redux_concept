import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { apiCall } from '../redux/comments/actionComments';

const ComponetsContainer = (props) => {

    useEffect(() => {
        props.apiComment()
    }, [props.apiComment]);

    const displayData = props.apiData.isLoading ? (
        <p>Loading ...</p>
    ) : props.apiData.error ? (
        <p>{props.apiData.error}</p>
    ) : (
        props.apiData.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.body}</p>
                    <hr />
                </div>
            )
        })
    )

    return (
        <div>
            <h2>Commentaires</h2>
            <hr />
            {displayData}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        apiData: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        apiComment: () => dispatch(apiCall())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponetsContainer);