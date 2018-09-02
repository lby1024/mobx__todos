import React from 'react'
import {inject, observer} from 'mobx-react' // <<=============


@inject('lby') @observer        // <<=========================
export default class Footer extends React.Component {
    render () {
        let {length} = this.props.lby       // <<=============
        return <div style={{marginTop: 21}}>共: {length}</div>
    }
}