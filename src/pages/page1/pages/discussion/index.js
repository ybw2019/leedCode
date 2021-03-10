import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import {
    DiscussionWrapper,
    DiscussionUl,
    DiscussionItem,
    Info,
    Title,
    DateTime,
    Num
}from './style';
class Discussion extends PureComponent {
  render() {
    const { disList } = this.props;
    return (
      <DiscussionWrapper>
        <input type="checkbox" id="nav" /><label for="nav"></label>
        {/* { console.log(disList)} */}
        <DiscussionUl>
          {
            disList.map((item) => {
              return (
              <DiscussionItem key={item.problemComment.problemId}>
            <Info>
              发布讨论
            </Info>
            {/* Link换到具体页面可以看看换页那里 */}
            <Link to={'/content/' + item.problemComment.problemId}>
            <Title>
            { item.problemComment.problemName }
            </Title>
            </Link>
            <DateTime>
            { item.problemComment.commentDatetime }
            </DateTime>
            {/* 这里之后设置成length */}
            {/* { console.log(item)} */}
            <Num>{item.solutionComment.length}</Num>
            <i className='iconfont'>&#xe629;</i>
          </DiscussionItem>
              )
            })
        }
        </DiscussionUl>
        {/* { this.props.getMoreDisList() } */}
      </DiscussionWrapper>
    )
  }
  componentDidMount() {
    this.props.getMoreDisList(); 
  }
}

const mapState = (state)=>({
  disList: state.getIn(['discussion', 'data'])
})

const mapDispatch = (dispatch) => ({
  getMoreDisList() {
    // alert(123)
    dispatch(actionCreators.MoreDisList())
  }
})

export default connect(mapState, mapDispatch)(Discussion);