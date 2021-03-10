import React, { Component } from 'react'
import Content from '../Content' // 评论内容
import Interaction from '../Interaction' //交互
import UserInformation from '../UserInformation' // 用户信息(头像、用户名)
import PubSub from 'pubsub-js' // 消息发布与订阅
import Comments from '../Comments';
import './index.css'


export default class SingleComment extends Component {

    // 发布消息，将用户的评论信息发布
    componentDidMount(){
        const {comment} = this.props.comment;
        // 头像
        PubSub.publish('image',comment.image)
        // 用户名
        PubSub.publish('username',comment.username)
        // 是否编辑过
        PubSub.publish('revised',comment.revised)
        // 评论日期
        PubSub.publish('commentDateTime',comment.commentDateTime)
        // 评论内容
        PubSub.publish('commentContent',comment.commentContent)
        // 点赞数量
        PubSub.publish('commentLikeNumber',comment.commentLikeNumber)
        // 回复数量
        PubSub.publish('commentReplyNumber',15)
        // 评论ID
        PubSub.publish('commentId',comment.commentId)
        // 题目ID
        PubSub.publish('problem',comment.problem)
    }

    // 鼠标进入或离开
    handleMouse=(flag)=>{
        this.setState({mouse:flag});
    }

    state = {
        // 鼠标进入或离开
        mouse:true,
        showBranch:false
    }

    // 是否展示分支评论
    changeShowBranch=()=>{
        this.setState({showBranch:!this.state.showBranch});
        // console.log(this.state.showBranch);
    }

    render() {
        return (
            <li id='singleComment' onMouseEnter={()=>this.handleMouse(false)} onMouseLeave={()=>this.handleMouse(true)}>
                <UserInformation/>
                <Content/>
                <Interaction mouse={this.state.mouse} type={this.props.type} changeShowBranch={this.changeShowBranch}/>
                {
                    this.props.type==="master"&&this.state.showBranch ? <Comments type={'branch'} comments={this.props.comment.comment.commentList}/> : ''
                }
            </li>
        )
    }
}
