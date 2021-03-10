import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Sort from '../Sort';
import './index.css'


export default class Head extends Component {

    state = {
        total:0,
        sortedClass:1,
        changeSort:false
    }

    // 组件挂载后接收总评论数及排序方式
    componentDidMount(){
        PubSub.subscribe('total',(_,total)=>{
            this.setState({total:total})
        });
        PubSub.subscribe('sortedClass',(_,sortedClass)=>{
            this.setState({sortedClass:sortedClass})
        })
    }

    render() {
        const {sortedClass} = this.state;
        return (
            <div id='head'>
                <span id='totalNum'>{this.state.total}</span>
                <span id='total'>条评论</span>
                <svg viewBox="0 0 24 24" width="1em" height="1em" id='svg_1'>
                    <path fillRule="evenodd" d="M4 17.594L8.64 13 4 8.406 5.406 7l6 6-6 6L4 17.594zM11 18h9v2h-9v-2z"></path>
                </svg>
                <button onClick={()=>this.setState({changeSort:!this.state.changeSort})} id='changeSort'>
                    {
                        sortedClass === 1 ? '最热' :
                        sortedClass === 2 ? '最新' : '最早'
                    }
                    <svg viewBox="0 0 24 24" width="1em" height="1em" id='svg_2'>
                        <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path>
                    </svg>
                </button>
                <Sort show={this.state.changeSort} sortClass={this.state.sortedClass} changeSortedClass={this.props.changeSortedClass}/>
            </div>
        )
    }
}
