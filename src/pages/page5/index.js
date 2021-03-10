import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import InputHistory from './components/history/index';
import SolutionItem from './components/solution/index';
import SolutionDetail from './components/solutionDetail/index';
import { Container, LeftWrapper, RightWrapper, FooterWrapper, Options, Mock, WriterOption, SolutionOption } from './style';
import * as actionCreator from './store/actionCreators';
import SolutionCode from './components/solutionCode/index';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import Writer from './components/writer/index';
import Comment from '../page4/App';
import { Nav } from './style';

const { Option } = Select;

class Solution extends PureComponent {
    render() {
        const { way, component, setComponent, handleGetInputHistory, handleGetSolution, changeRightComponent, changeRightOptions, handleGetComment } = this.props;
        return (
            <Fragment>
                <Nav style={{ height: "40px", width: "100%", background: "#F7F7F7", position: "relative" }}>
                    <div className="bt_1">题目详情</div>
                    <div className="bt_2" onClick={handleGetComment.bind(this)}>评论</div>
                    <div className="bt_3" onClick={handleGetSolution.bind(this)}>题解</div>
                    <div className="bt_4" onClick={handleGetInputHistory.bind(this)}>提交记录</div>
                    {
                        changeRightOptions(component)
                    }
                </Nav>
                <Container className="container">
                    <LeftWrapper className="left">
                        {setComponent(way)}
                    </LeftWrapper>
                    <RightWrapper className="right">
                        {changeRightComponent(component)}
                    </RightWrapper>
                    <FooterWrapper className="footer"></FooterWrapper>
                </Container>
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    way: state.getIn(["page5", "way"]),
    component: state.getIn(["page5", "component"]),
});

const mapDispatch = (dispatch) => {
    return {
        handleGetComment() {
            dispatch(actionCreator.setComment());
        },

        setComponent(way) {
            switch (way) {
                case 1:
                    return <div>1</div>
                case 2:
                    return <Comment />
                case 3:
                    return <SolutionItem />
                case 4:
                    return <InputHistory />
                default:
                    return <SolutionItem />
            }
        },

        handleGetInputHistory() {
            dispatch(actionCreator.setHistory());
            dispatch(actionCreator.getHistory());
        },

        handleGetSolution() {
            dispatch(actionCreator.setSolutionItem());
        },

        changeRightComponent(component) {
            if (component === "code") {
                return <SolutionCode />;
            }
            if (component === "writer") {
                return <Writer />
            }
            if (component === "detail") {
                return <SolutionDetail />
            }
        },

        changeRightOptions(component) {
            function switchLanguage(e) {
                let title = e;
                if (title === "C++") {
                    dispatch(actionCreator.setLanguageCpp());
                }
                if (title === "Java") {
                    dispatch(actionCreator.setLanguageJava());
                }
                if (title === "Javascript") {
                    dispatch(actionCreator.setLanguageJavascript());
                }
            }
            function backToCode() {
                dispatch(actionCreator.backToCode());
            }
            if (component === "code") {
                return <Options>
                    <Select className="inputType" defaultValue="C++" onChange={switchLanguage.bind(this)}>
                        <Option value="C++">C++</Option>
                        <Option value="Java">Java</Option>
                        <Option value="Javascript">Javascript</Option>
                    </Select>
                    <div className="smartMode">
                        <span className="iconfont">&#xe7e0;智能模式</span>
                    </div>
                    <Mock>
                        <span className="iconfont">&#xe6f2;模拟面试</span>
                    </Mock>
                    <span className="item1 iconfont">&#xe67f;</span>
                    <span className="item2 iconfont">&#xe601;</span>
                    <span className="item3 iconfont">&#xe67b;</span>
                    <span className="item4 iconfont">&#xe8d9;</span>
                    <span className="item5 iconfont">&#xe632;</span>
                    <span className="item6 iconfont">&#xe6ea;</span>
                </Options>
            }
            if (component === "writer") {
                return <WriterOption>
                    <button className="quit" onClick={backToCode}>关闭</button>
                    <span className="view iconfont">&#xe70d;预览</span>
                    <span className="show iconfont">||两栏显示</span>
                </WriterOption>
            }
            if (component === "detail") {
                return <SolutionOption>
                    <button className="quit" onClick={backToCode}>关闭</button>
                </SolutionOption>
            }
        },
    }
};
export default connect(mapState, mapDispatch)(Solution);