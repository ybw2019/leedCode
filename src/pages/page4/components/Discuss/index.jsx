import React, { Component } from 'react'
import Speak from '../Speak'
import Head from '../Head'
import './index.css'


export default class Discuss extends Component {

    render() {
        return (
            <div id='discuss'>
                <Head changeSortedClass={this.props.changeSortedClass}/>
                <Speak parent={''} canCancel={false}/>
            </div>
        )
    }
}
