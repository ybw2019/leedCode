import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { SearchWrapper, InputWrapper, Option, Labels, Solutions, Item } from './style';
import * as actionCreator from './store/actionCreators';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

class SolutionItem extends PureComponent {
    render() {
        const { labelList, solutionList, totalPage, setWriter, component, setSolutionDetail, getSolutionDetail } = this.props;
        return (
            <Fragment>
                <SearchWrapper>
                    <InputWrapper>
                        <span className="search_icon iconfont">&#xe602;</span>
                        <input className="search" placeholder="搜索题解"></input>
                    </InputWrapper>
                    {
                        component === "writer" ? <Option>
                            <span className="changed_rank_icon iconfont">&#xe668; 排序</span>
                        </Option> : <Option>
                                <span className="rank_icon iconfont">&#xe668; 排序</span>
                                <span className="split">|</span>
                                <button className="write" onClick={setWriter.bind(this)}><span className="iconfont">&#xe662;</span> 写题解</button>
                            </Option>
                    }
                </SearchWrapper>
                <Labels>
                    <div className="label focused">不限</div>
                    {
                        labelList.map((item, index) => {
                            return <div id={`${item._root.entries[0][1]}`} className="label" key={index}>{item._root.entries[1][1]}</div>
                        })
                    }
                    <span className="more iconfont">&#xe61a;</span>
                </Labels>
                <Solutions>
                    {
                        solutionList.map((item, index) => {
                            return <Item key={index}>
                                <div className="left">
                                    <img src="https://upload.jianshu.io/flow/ad/8186db34-9092-4123-8d7a-f447f5c01a80" alt="" />
                                </div>
                                <div className="right">
                                    <div className="top" onClick={() => {
                                        setSolutionDetail();
                                        getSolutionDetail();
                                    }}>
                                        <a className="user" href="/">
                                            <img className="userPic" alt="" src={item._root.nodes[10].entry[1]}></img>
                                        </a>
                                        <p className="title">{item._root.nodes[0].nodes[1].entry[1]}</p>
                                    </div>
                                    <div className="content" onClick={this.handleClick}>
                                        <p className="info">{item._root.nodes[1].nodes[0].nodes[0].entry[1]}</p>
                                    </div>
                                    <div className="options">
                                        <span className="iconfont op1">&#xe605;</span>
                                        <span className="iconfont op2">&#xe630;{item._root.nodes[8].entry[1]}</span>
                                        <span className="iconfont op3">&#xe70d;{item._root.nodes[4].entry[1]}</span>
                                        <span className="iconfont op4">&#xe663;{item._root.nodes[2].entry[1]}</span>
                                        <span className="iconfont op5">&#xe701;</span>
                                    </div>
                                </div>
                            </Item>
                        })
                    }
                    <Pagination className="pages" defaultCurrent={1} total={totalPage * 10} />
                </Solutions>
            </Fragment>
        )
    }

    componentWillMount() {
        this.props.getLabels();
        this.props.getSolutions();
    }
}

const mapState = (state) => ({
    labelList: state.getIn(["solution", "labelList"]),
    solutionList: state.getIn(["solution", "solutionList"]),
    totalPage: state.getIn(["solution", "totalPage"]),
    component: state.getIn(["page5", "component"]),
});

const mapDispatch = (dispatch) => {
    return {
        getLabels() {
            dispatch(actionCreator.getLabels());
        },

        getSolutions() {
            dispatch(actionCreator.getSolution());
        },

        setWriter() {
            const type = "writer";
            dispatch(actionCreator.setWriter(type));
        },

        setSolutionDetail() {
            const type = "detail";
            dispatch(actionCreator.setSolutionDetail(type));
            dispatch(actionCreator.setWriter(type));
            dispatch(actionCreator.getSolutionDetail());
        },

        getSolutionDetail() {
            dispatch(actionCreator.getDetail());
        },
    }
};
export default connect(mapState, mapDispatch)(SolutionItem);