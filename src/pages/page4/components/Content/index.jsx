import React, { Component } from 'react';
import PubSub from 'pubsub-js' // 消息发布与订阅
import './index.css'

export default class content extends Component {
    // 组件挂载后接收评论内容
    componentDidMount() {
        PubSub.subscribe('commentContent', (_, content) => {
            this.setState({ content: content })
        })
    }

    state = {
        content: 1
    }

    render() {
        return (
            <p id='content'>{this.state.content}</p>
        );
    }
}