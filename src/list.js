import React from 'react'
import {List} from 'antd'
import {observer, inject} from 'mobx-react'     // <<============

@inject('lby') @observer        // <<============================
export default class TodoList extends React.Component {

    change = index => this.props.lby.change(index)  // <<============
    del = index => this.props.lby.del(index)        // <<============

    list_item = (item, index) => 
        <List.Item>
            <span 
                onClick={()=>this.change(index)}
                className={item.done?'done':''}>
                {index+1} - {item.title} - {`${item.done}`}
            </span>
            <span 
                onClick={()=>this.del(index)}>
                X
            </span>
        </List.Item>

    render () {
        let {list} = this.props.lby
        list.length                         // 如果不写, list长度发生变化 ---> 组件不会更新
        list.map(item=>item.done)           // 如果不写, mobx.list[n].done变化, 组件不会更新 ---> [{title, done}, {title, done} ... ] 

        return <List
            style={{marginTop: 30}}
            bordered
            dataSource={list}
            renderItem={this.list_item}>
        </List>
    }
}