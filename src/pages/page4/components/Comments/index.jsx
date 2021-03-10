import React, { Component } from 'react';
import SingleCommoent from '../SingleComment'


export default class Comments extends Component {

    render() {
        return (
            <ul>
                {this.props.comments.map((comment)=>{
                    return <SingleCommoent key={1} comment={comment} type={this.props.type}/>;
                })}
            </ul>
        );
    }
}
