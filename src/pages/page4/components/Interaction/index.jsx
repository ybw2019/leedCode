import React, { Component } from 'react'
import IntBtn from '../IntBtn'
// import {nanoid} from 'nanoid'
import PubSub from 'pubsub-js' // 消息发布与订阅
import axios from 'axios'
import Speak from '../Speak';
import './index.css'


export default class Interaction extends Component {

    // 组件挂载后接收点赞数和回复数
    componentDidMount(){
        // 接收点赞数
        PubSub.subscribe('commentLikeNumber',(_,likes)=>{
            this.setState({support:["M7 19v-8H4v8h3zM7 9c0-.55.22-1.05.58-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21c1.1 0 2 .9 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H4a2 2 0 01-2-2v-8a2 2 0 012-2h3zm2 0v10h9l3-7v-2h-9l1.34-5.34L9 9z",likes]})
        });
        // 接收回复数
        PubSub.subscribe('commentReplyNumber',(_,replies)=>{
            this.setState({view:["M8.995 22a.955.955 0 01-.704-.282.955.955 0 01-.282-.704V18.01H3.972c-.564 0-1.033-.195-1.409-.586A1.99 1.99 0 012 15.99V3.97c0-.563.188-1.032.563-1.408C2.94 2.188 3.408 2 3.972 2h16.056c.564 0 1.033.188 1.409.563.375.376.563.845.563 1.409V15.99a1.99 1.99 0 01-.563 1.432c-.376.39-.845.586-1.409.586h-6.103l-3.709 3.71c-.22.187-.454.281-.704.281h-.517zm.986-6.01v3.1l3.099-3.1h6.948V3.973H3.972V15.99h6.01zm-3.99-9.013h12.018v2.018H5.991V6.977zm0 4.037h9.014v1.972H5.99v-1.972z",`查看${replies}条回复`]})
        })
        // 接收评论ID
        PubSub.subscribe('commentId',(_,commentId)=>{
            this.setState({commentId:commentId})
        })
        // this.setState({
        //     mouse:this.props.mouse
        // })
    }

    state = {
        support:["M7 19v-8H4v8h3zM7 9c0-.55.22-1.05.58-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21c1.1 0 2 .9 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H4a2 2 0 01-2-2v-8a2 2 0 012-2h3zm2 0v10h9l3-7v-2h-9l1.34-5.34L9 9z",0],
        against:["M17 3v12c0 .55-.22 1.05-.58 1.41L9.83 23l-1.06-1.05c-.27-.27-.44-.65-.44-1.06l.03-.32.95-4.57H3c-1.1 0-2-.9-2-2v-2c0-.26.05-.5.14-.73l3.02-7.05C4.46 3.5 5.17 3 6 3h11zm-2 12V5H6l-3 7v2h9l-1.34 5.34L15 15zm2-2h3V5h-3V3h3a2 2 0 012 2v8a2 2 0 01-2 2h-3v-2z","踩"],
        view:["M8.995 22a.955.955 0 01-.704-.282.955.955 0 01-.282-.704V18.01H3.972c-.564 0-1.033-.195-1.409-.586A1.99 1.99 0 012 15.99V3.97c0-.563.188-1.032.563-1.408C2.94 2.188 3.408 2 3.972 2h16.056c.564 0 1.033.188 1.409.563.375.376.563.845.563 1.409V15.99a1.99 1.99 0 01-.563 1.432c-.376.39-.845.586-1.409.586h-6.103l-3.709 3.71c-.22.187-.454.281-.704.281h-.517zm.986-6.01v3.1l3.099-3.1h6.948V3.973H3.972V15.99h6.01zm-3.99-9.013h12.018v2.018H5.991V6.977zm0 4.037h9.014v1.972H5.99v-1.972z","查看0条回复"],
        reply:["M21.947 18.144a1 1 0 01-1.496 1.18c-3.255-2.193-5.734-3.275-8.556-3.477v4.134a1 1 0 01-1.688.726L2.312 13.22a1 1 0 010-1.451l7.894-7.494A1 1 0 0111.895 5v3.953c3.62.481 7.937 3.52 10.052 9.191zm-6.992-5.851c-1.624-.938-3.31-1.407-5.06-1.407V7.287l-5.422 5.207 5.422 5.203v-3.885c2.696 0 5.644.763 8.843 2.29-1.002-1.52-2.346-2.979-3.783-3.81z","回复"],
        share:["M17 5V2l5 5h-9a2 2 0 00-2 2v8H9V9a4 4 0 014-4h4zm3 14V9h2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h3v2H4v14h16z","分享"],
        accusation:["M1 22L12 2l11 20H1zm18.617-2L12 6.15 4.383 20h15.234zM13 19h-2v-2h2v2zm0-3h-2v-5h2v5z","举报"],
        isSupported:false,
        isAgainsted:false,
        willReply:false,
        showBranch:false,
        commentId:0,
        // mouse:false
    }

    // 赞
    support = ()=>{
        axios.put(`http://rap2api.taobao.org/app/mock/276533/leetcode/question/comment/like?likeId=${this.state.commentId}&likeStates=${this.state.isSupported ? 3 : 1}&likeTarget=3`).then(
            ()=>{this.state.isSupported ? this.setState({isSupported:false,support:["M7 19v-8H4v8h3zM7 9c0-.55.22-1.05.58-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21c1.1 0 2 .9 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H4a2 2 0 01-2-2v-8a2 2 0 012-2h3zm2 0v10h9l3-7v-2h-9l1.34-5.34L9 9z",this.state.support[1]-1]}) : this.setState({isSupported:true,support:["M7 19v-8H4v8h3zM7 9c0-.55.22-1.05.58-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21c1.1 0 2 .9 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H4a2 2 0 01-2-2v-8a2 2 0 012-2h3zm2 0v10h9l3-7v-2h-9l1.34-5.34L9 9z",this.state.support[1]+1]})}
        )
    }
    // 踩
    against = ()=>{
        axios.put(`http://rap2api.taobao.org/app/mock/276533/leetcode/question/comment/like?likeId=${this.state.commentId}&likeStates=${this.state.isAgainsted ? 4 : 2}&likeTarget=3`).then(
            ()=>{this.setState({isAgainsted:!this.state.isAgainsted})}
        )
    }
    // 查看回复
    view = ()=>{
        this.props.changeShowBranch();
        this.setState({showBranch:!this.state.showBranch})
    }
    // 回复
    reply = ()=>{
        this.setState({willReply:!this.state.willReply})
    }
    // 分享
    // 举报
    render() {
        // console.log(this.props);
        return (
            <div>
                {
                    this.state.willReply ? <Speak parent={this.state.commentId} cancel={this.reply} canCancel={true}/> :
                    <div id='interaction'>
                        <IntBtn type='grey' svg={this.state.support[0]} txt={this.state.support[1]} onClick={this.support}/>
                        <IntBtn type='grey' svg={this.state.against[0]} txt={this.state.against[1]} onClick={this.against}/>
                        <IntBtn type='grey' svg={this.state.view[0]} txt={this.state.showBranch ? '收起回复' : this.state.view[1]} onClick={this.view} mouse={this.props.type==='master' ? false : true}/>
                        <IntBtn type='grey' svg={this.state.reply[0]} txt={this.state.reply[1]} onClick={this.reply}/>
                        <IntBtn type='grey' svg={this.state.share[0]} txt={this.state.share[1]} mouse={this.props.mouse}/>
                        <IntBtn type='grey' svg={this.state.accusation[0]} txt={this.state.accusation[1]} mouse={this.props.mouse}/>
                    </div>
                }
            </div>
        )
    }
}
