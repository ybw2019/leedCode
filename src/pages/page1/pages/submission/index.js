import React, { PureComponent } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import {
    SubmissionWrapper,
    SubmissionUl,
    SubmissionItem,
    Info,
    Problem,
    Submit,
    SubmitTime
}from './style';
class Submission extends PureComponent {
  chooseResult(num) {
    if (num === 2) {
      return 'succ';
    } else {
      return 'error'
    }
  }
  chooseWord(num) {
    if (num === 0) {
      return '编译出错';
    } else if (num === 1) {
      return '运行出错';
    } else if (num === 2) {
      return '运行成功'
    }
  }
  render() {
    const { dataList } = this.props;
    return (
      <SubmissionWrapper>
        <input type="checkbox" id="nav" /><label for="nav"></label>
       <SubmissionUl>
          {
            dataList.map((item)=>{
              return (
                <SubmissionItem key={item.submission.problemId}>
            <Info>
              我在题目
            </Info>
            <Problem>
              {item.submission.problemName}
            </Problem>
            <Info>
              中使用
            </Info>
            <Problem>
              {item.submission.language}
            </Problem>
            <SubmitTime>
              {item.submission.submitDateTime}
            </SubmitTime>
            <Submit className={this.chooseResult(item.submission.submitResult)}>
              {this.chooseWord(item.submission.submitResult)} 
            </Submit>
          </SubmissionItem>
              )
            })
          }





          {/* <SubmissionItem>
            <Info>
              我在题目
            </Info>
            <Problem>
              1.两数之和
            </Problem>
            <Info>
              中使用
            </Info>
            <Problem>
              JavaScript
            </Problem>
            <SubmitTime>
              一天前
            </SubmitTime>
            <Submit className='succ'>
              通过 
            </Submit>
          </SubmissionItem>
          <SubmissionItem>
            <Info>
              我在题目
            </Info>
            <Problem>
              1.两数之和
            </Problem>
            <Info>
              中使用
            </Info>
            <Problem>
              JavaScript
            </Problem>
            <SubmitTime>
              一天前
            </SubmitTime>
            <Submit className='error'>
              编译出错
            </Submit>
          </SubmissionItem> */}
        </SubmissionUl>
        {/* { this.props.getMoreSubList() } */}
      </SubmissionWrapper>
    )
  }
  componentDidMount() {
    this.props.getMoreSubList()
  }
}
const mapState = (state)=>({
  dataList: state.getIn(['submission', 'data'])
})

const mapDispatch = (dispatch) => ({
  getMoreSubList() {
    dispatch(actionCreators.MoreSubList())
  }
})
export default connect(mapState, mapDispatch)(Submission);