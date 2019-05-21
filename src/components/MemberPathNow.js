import React from 'react'
import { withRouter } from 'react-router'

const PathNow = props => <>{props.location.pathname}</>
// 因為location(或是match, history)不會跟著props傳進來

export default withRouter(PathNow)
