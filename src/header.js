import React from 'react'
import {Input, message} from 'antd'
import {observer, inject} from 'mobx-react' // <<==========

@inject('lby') @observer      // <<======================
export default class Header extends React.Component {

    state = {
        value: ''
    }

    add = value => {
        if (value==='') {
            message.error('内容不能为空')
        } 
        else{
            this.props.lby.add(value)   // <<============
            this.setState({value: ''})
            message.info('添加了一项新任务')
        }
    }
    change = e => {
        let value = e.target.value
        this.setState({value})
    }

    render () {
        return  <Input.Search
                    value={this.state.value}
                    onChange={this.change}
                    placeholder="添加代办事项"
                    enterButton="add"
                    size="large"
                    onSearch={value => this.add(value)}>
                </Input.Search>
    }
}