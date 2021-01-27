import React from 'react'
import { connect } from 'react-redux'
import { GetRequest } from './redux/RequestActions'
import RequestCard from './RequestCard'

function Requests(props) {
    React.useEffect(() => {
        props.dispatch( GetRequest())
    }, [])

    

    console.log('props.Requests: ', props.requests ? props.requests.requests : "")
    return (
        <div>
        <h1>Requests: </h1>

            { props.requests ? props.requests.requests.map((req) => (<RequestCard data={req} />)) : "Loading..."}

        </div>
    )
}

export default connect((state) => {
    // console.log("from connect: ", state.RequestReducer.requests.data);
    return {requests: state.RequestReducer.requests.data};
  })(Requests);
