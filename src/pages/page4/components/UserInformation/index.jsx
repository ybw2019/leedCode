import React, { Component } from 'react'
import PubSub from 'pubsub-js' // 消息发布与订阅
import default_avatar from './default_avatar.jpeg'
import './index.css'


export default class UserInformation extends Component {
    
    // 组件挂载后接收用户头像和用户名信息
    componentDidMount(){
        // 接收头像
        PubSub.subscribe('image',(_,image)=>{
            this.setState({image:image})
        });
        // 接收用户名
        PubSub.subscribe('username',(_,username)=>{
            this.setState({username:username})
        });
        // 是否编辑过
        PubSub.subscribe('revised',(_,isRevised)=>{
            this.setState({isRevised:isRevised})
        });
        // 日期
        PubSub.subscribe('commentDateTime',(_,date)=>{
            this.setState({date:date})
        })
    }

    state = {
        img:'1',
        username:1,
        isRevised:false,
        date:'2020-09-30'
    }
    
    render() {
        return (
            <div id='userInformation'>
                <a href="http://www.baidu.com">
                    <img id='avatar' src={default_avatar} alt="avatar"/>
                    <span id='uaerName'>{this.state.username}</span>
                </a>
                <span id='right'>
                    {/* <span>{this.state.isRevised ? '（编辑过）' : ''}</span> */}
                    <span>（编辑过）</span>
                    <span>{this.state.date}</span>
                </span>
            </div>
        )
    }
}
