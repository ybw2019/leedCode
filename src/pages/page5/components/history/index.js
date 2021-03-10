import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { InputRecord, NullTip, Green, Red } from './style';

class InputHistory extends PureComponent {
    render() {
        const { show, time, result, run, cpu, language, setList } = this.props;
        return (
            <Fragment>
                {
                    show ? setList(time, result, run, cpu, language) : <NullTip>您还没有任何提交记录</NullTip>
                }
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    show: state.getIn(["history", "show"]),
    time: state.getIn(["history", "time"]),
    result: state.getIn(["history", "result"]),
    run: state.getIn(["history", "run"]),
    cpu: state.getIn(["history", "cpu"]),
    language: state.getIn(["history", "language"]),
});

const mapDispatch = (dispatch) => {
    return {
        setList(time, result, run, cpu, language) {
            const columns = [
                {
                    title: '提交时间',
                    dataIndex: 'input_time',
                },
                {
                    title: '提交结果',
                    dataIndex: 'result',
                },
                {
                    title: '运行时间',
                    dataIndex: 'run_time',
                },
                {
                    title: '内存消耗',
                    dataIndex: 'memory',
                },
                {
                    title: '语言',
                    dataIndex: 'language',
                },
            ];
            const results = [];
            let resLen = result._tail.array.length ? result._tail.array.length : 0;
            for (let i = 0; i < resLen; i++) {
                let item = result._tail.array[i];
                if (item === 0) {
                    results.push(<Red>编译出错</Red>);
                }
                else if (item === 1) {
                    results.push(<Red>运行出错</Red>);
                } else {
                    results.push(<Green>运行成功</Green>);
                }
            }
            const data = [];
            let length = time._tail.array.length ? time._tail.array.length : 0;
            for (let i = 0; i < length; i++) {
                data.push({
                    key: `${i}`,
                    input_time: `${time._tail.array[i]}`,
                    result: results[i],
                    run_time: `${run._tail.array[i]}`,
                    memory: `${cpu._tail.array[i]}`,
                    language: `${language._tail.array[i]}`,
                });
            }
            return (
                <InputRecord>
                    <Table className="list" columns={columns} dataSource={data} size="middle" />
                </InputRecord>
            )
        },
    }
};
export default connect(mapState, mapDispatch)(InputHistory);