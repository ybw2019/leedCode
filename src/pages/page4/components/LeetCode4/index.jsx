import React, { Component } from 'react'
import Comments from '../Comments'
import Discuss from '../Discuss'
import PageUp from '../PageUp'
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.css'



export default class LeetCode4 extends Component {

    state = {
        // 问题ID
        problemId: 0,
        // 排序方法
        sortedClass: 1,
        // 页码
        pages: 1,
        // 评论总数
        total: 0,
        // 评论
        comments: []
    }

    //订阅题目ID并请求评论信息
    componentDidMount(){

        // 订阅消息，获取题目ID并保存在state中
        this.getProblemId = PubSub.subscribe('problemId',(_,ID)=>{
            this.setState({problemId:ID});
        })

        // 请求评论信息并保存
        axios.get(`http://rap2api.taobao.org/app/mock/276533/leetcode/question/sortedProblemcomment?problemId=${this.state.problemId}&sortedClass=${this.state.sortedClass}&pages=${this.state.pages}&limit=10`).then(
            response => {
                // 保存
                this.setState({comments:response.data.commentList});
                this.setState({total:response.data.total});
            },
            error => console.log(error)
        )  
    }

    //取消订阅题目ID
    componentWillUnmount(){
        PubSub.unsubscribe(this.getProblemId);
    }

    // 更改排序方法（重新请求评论信息）
    changeSortedClass=(sortedClass)=>{
        this.setState({sortedClass:sortedClass});

        // 请求评论信息并保存
        axios.get(`http://rap2api.taobao.org/app/mock/276533/leetcode/question/sortedProblemcomment?problemId=${this.state.problemId}&sortedClass=${sortedClass}&pages=${this.state.pages}&limit=10`).then(
            response => {
                // 保存
                this.setState({comments:response.data.commentList});
                this.setState({total:response.data.total});
            },
            error => console.log(error)
        )  
    }

    // 翻页（重新请求评论信息）
    changePages=(pages)=>{
        this.setState({pages:pages});
        // 请求评论信息并保存
        axios.get(`http://rap2api.taobao.org/app/mock/276533/leetcode/question/sortedProblemcomment?problemId=${this.state.problemId}&sortedClass=${this.state.sortedClass}&pages=${pages}&limit=10`).then(
            response => {
                // 保存
                this.setState({comments:response.data.commentList});
                this.setState({total:response.data.total});
            },
            error => console.log(error)
        )
    }

    render() {
        // 发布评论信息
        PubSub.publish('comments',this.state.comments);
        // 发布评论总数
        PubSub.publish('total',this.state.total);
        // 发布页码
        PubSub.publish('pages',this.state.pages);
        // 发布排序方法
        PubSub.publish('sortedClass',this.state.sortedClass);
        return (
            <div id='leetcode4'>
                <Discuss changeSortedClass={this.changeSortedClass}/>
                <Comments type={'master'} comments={this.state.comments} show={true}/>
                <PageUp changePages={this.changePages} currentPage={this.state.pages} total={this.state.total}/>
            </div>
        )
    }
}
