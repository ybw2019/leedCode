import React, { Component } from 'react';
import './index.css'


export default class Sort extends Component {

    change = (sortedClass)=>{
        this.props.changeSortedClass(sortedClass);
    }
    
    render() {
        const {show,sortClass} = this.props
        return (
            <div style={{display:show?'block':'none'}} id='sort'>
                <div onClick={()=>this.change(1)} className='btn' id={sortClass===1 ? 'yes' : 'no'}>
                    <span>最热</span>
                    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" style={{display:sortClass===1?'block':'none'}}>
                        <path fillRule="evenodd" d="M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div onClick={()=>this.change(2)} className='btn' id={sortClass===2 ? 'yes' : 'no'}>
                    <span>最新</span>
                    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" style={{display:sortClass===2?'block':'none'}}>
                        <path fillRule="evenodd" d="M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div onClick={()=>this.change(3)} className='btn' id={sortClass===3 ? 'yes' : 'no'}>
                    <span>最早</span>
                    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" style={{display:sortClass===3?'block':'none'}}>
                        <path fillRule="evenodd" d="M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
        );
    }
}