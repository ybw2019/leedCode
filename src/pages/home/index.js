import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.sendRequest = this.sendRequest.bind(this)
    }
    render() {
        return (
            <div>
                <button onClick={this.sendRequest}>click me</button>
            </div>);
    }
    sendRequest() {
        axios({
            url: "http://8.135.33.205:9000/leetcode/question/solution/2/null/2/0/链表",
            method: "GET"
        }).then(res => {
            console.log(res)
        })
    }
}

export default Home;
