import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Top, Content, Footer, Wrapper, WriterArea, CommentArea } from './style';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import * as actionCreator from './store/actionCreators';

const { TextArea } = Input;

class SolutionDetail extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            comment: [],
        };
    }

    getInputValue = ({ target: { value } }) => {
        this.setState({ value });
    };

    setComment(comment) {
        this.setState = ({
            comment,
        });
    };

    componentWillMount() {
        this.props.getComment();
    };

    componentDidMount() {
        const { comment } = this.props;
        this.setComment(comment);
    };

    render() {
        const { inputValue } = this.state;
        const { comment, detail } = this.props;
        console.log(detail)
        return (
            <Fragment>
                <Wrapper>
                    <Top>
                        <div className="userInfo">
                            <img className="user_pic" src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                            <span className="nickname">[C++]最简计数+前缀和、后缀和解法</span>
                        </div>
                        <div className="solutionInfo">
                            <span className="userId">是惠痴哦</span>
                            <span className="inputTime">发布于 2021-3-4</span>
                            <span className="view iconfont">&#xe70d; 2.0k</span>
                            <span className="label">C++</span>
                        </div>
                    </Top>
                    <Content>
                        <div>看到很多解法三种条件各取一遍，实际上求出各个字母出现的频次之后只需扫一遍字母表就能得出解了。 以示例 2 中 a = \"dabadd\", b = \"cda\" 为例。首先计算出两个字符串中字母的次数，如图所示。为了省事只列出字母a~f， 满足条件一，等同于要让a字符串所有出现次数大于0的字母统统小...看到很多解法三种条件各取一遍，实际上求出各个字母出现的频次之后只需扫一遍字母表就能得出解了。 以示例 2 中 a = \"dabadd\", b = \"cda\" 为例。首先计算出两个字符串中字母的次数，如图所示。为了省事只列出字母a~f， 满足条件一，等同于要让a字符串所有出现次数大于0的字母统统小...看到很多解法三种条件各取一遍，实际上求出各个字母出现的频次之后只需扫一遍字母表就能得出解了。 以示例 2 中 a = \"dabadd\", b = \"cda\" 为例。首先计算出两个字符串中字母的次数，如图所示。为了省事只列出字母a~f， 满足条件一，等同于要让a字符串所有出现次数大于0的字母统统小...</div>
                    </Content>
                    <Footer>
                        <span className="next">下一篇: C++模拟大法好</span>
                        <span className="right">© 著作权归作者所有</span>
                    </Footer>
                    <WriterArea>
                        <span className="number">3</span>
                        <span className="number_ico"> 条评论</span>
                        <span className="iconfont next_ico">&#xe638;</span>
                        <span className="rank">最热</span>
                        <span className="iconfont rank_ico">&#xe630;</span>
                        <TextArea
                            className="writer"
                            value={inputValue}
                            onChange={this.getInputValue}
                            placeholder="请在此写下你的见解"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    </WriterArea>
                    {
                        comment.map((item, index) => {
                            return <CommentArea key={index}>
                                <div className="top">
                                    <img className="user_pic" src={item._root.nodes[5].entry[1]} alt=""></img>
                                    <span className="nickname">{item._root.nodes[3].entry[1]}</span>
                                    <span className="time">2019-02-13</span>
                                </div>
                                <div className="content">
                                    <p className="comment">{item._root.nodes[4].nodes[0].entry[1]}</p>
                                </div>
                                <div className="footer">
                                    <span className="iconfont nice">&#xe605; 赞 {item._root.nodes[7].entry[1]}</span>
                                    <span className="iconfont bad">&#xe73c; 踩</span>
                                    <span className="iconfont reply">&#xe67b; 回复</span>
                                </div>
                            </CommentArea>
                        })
                    }
                </Wrapper>
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    comment: state.getIn(["detail", "comment"]),
    detail: state.getIn(["detail", "detail"]),
});

const mapDispatch = (dispatch) => {
    return {
        getComment() {
            dispatch(actionCreator.getComment());
        },
    }
};
export default connect(mapState, mapDispatch)(SolutionDetail);