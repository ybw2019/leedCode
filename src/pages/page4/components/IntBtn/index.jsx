import React, { Component } from 'react'
import './index.css'


export default class IntBtn extends Component {   
    render() {
        const {svg,txt,mouse,type} = this.props;
        return (
            <button id={mouse?'none':type} onClick={this.props.onClick}>
                <svg viewBox="0 0 24 24" width="1em" height="1em">
                    <path fillRule="evenodd" d={svg}></path>
                </svg>
                <span>{txt}</span>
            </button>
        )
    }
}