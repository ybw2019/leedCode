import React, { Fragment, PureComponent } from 'react';
import {
    LoginWrapper, LoginBox, Header, GetCode, Button, AccountLogin,
    CodesLogin, ForgetPass, EmailRegister, USALogin, MoreWay, Info, CodeLogin
} from './style';
import 'antd/dist/antd.css';
import { Input, Select } from 'antd';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import Page1 from '../page1/App.js';

const { Option } = Select;

class Login extends PureComponent {

    constructor(props) {
        super(props);
        this.account = React.createRef();
        this.password = React.createRef();
        this.username = React.createRef();
        this.phone = React.createRef();
        this.code = React.createRef();
        this.state = {
            count: 60,
            start: true,
        };
    }

    countDown() {
        let timer = setInterval(() => {
            this.setState(state => ({
                count: state.count - 1,
                start: false,
            }), () => {
                console.log(this.state.count)
                if (this.state.count <= -1) {
                    clearInterval(timer);
                    this.setState({
                        count: 60,
                        start: true,
                    });
                };
            });
        }, 1000)
    }

    loginWay(way) {
        const { handleWayChange, handleLogin, handleEmailReg, handlePhoneLogin, handleGetCode } = this.props;
        if (way === 1) {
            return (
                <div>
                    <Header>欢迎使用力扣</Header>
                    <Input.Group compact className="phone">
                        <Select defaultValue="+86">
                            <Option value="+86">+86</Option>
                            <Option value="+10">+10</Option>
                        </Select>
                        <Input style={{ width: '70%' }} placeholder="输入手机号" ref={this.phone} />
                    </Input.Group>
                    <Input className="code" style={{ width: '87%' }} placeholder="验证码" ref={this.code} />
                    <GetCode onClick={handleGetCode.bind(this)}>
                        {this.state.start ? '获取验证码' : `${this.state.count}秒后重发`}
                    </GetCode>
                    <Button onClick={handlePhoneLogin.bind(this)}>登录 / 注册</Button>
                    <AccountLogin onClick={handleWayChange.bind(this, 3)}>账号密码登录</AccountLogin>
                    <EmailRegister onClick={handleWayChange.bind(this, 2)}>邮箱注册</EmailRegister>
                    <USALogin>
                        <a href="/" className="title">已有美国站账号</a>
                        <span className="iconfont">&#xe638;</span>
                    </USALogin>
                </div>
            )
        }
        if (way === 2) {
            return (
                <div>
                    <Header>邮箱注册</Header>
                    <Input className="code" placeholder="输入邮箱" style={{ width: '87%' }} ref={this.account} />
                    <Input className="code" placeholder="输入密码" style={{ width: '87%' }} ref={this.password} />
                    <Input className="code" placeholder="你的称呼" style={{ width: '87%' }} ref={this.username} />
                    <Button onClick={handleEmailReg.bind(this)}>注册</Button>
                    <CodeLogin onClick={handleWayChange.bind(this, 1)}>
                        <div className="title">验证码登录</div>
                    </CodeLogin>
                </div>
            )
        }
        if (way === 3) {
            return (
                <div>
                    <Header>账号密码登录</Header>
                    <Input className="code" placeholder="手机号/邮箱" style={{ width: '87%' }} ref={this.account} />
                    <Input className="code" placeholder="输入密码" style={{ width: '87%' }} ref={this.password} />
                    <Button onClick={handleLogin.bind(this)}>登录</Button>
                    <CodesLogin onClick={handleWayChange.bind(this, 1)}>验证码登录</CodesLogin>
                    <ForgetPass>忘记密码</ForgetPass>
                </div>
            )
        }
    };

    render() {
        const { way, login } = this.props;
        return (
            <Fragment>
                {
                    login ? <Page1 /> : <LoginWrapper>
                        <LoginBox>
                            {
                                this.loginWay(way)
                            }
                            <MoreWay>
                                <a href="/" className="iconfont qq">&#xe6ca;</a>
                                <a href="/" className="iconfont github">&#xe604;</a>
                                <a href="/" className="iconfont wb">&#xe641;</a>
                                <a href="/" className="iconfont wechart">&#xe665;</a>
                                <a href="/" className="iconfont more">&#xe6d3;</a>
                            </MoreWay>
                            <Info>
                                <p className="first">登录注册即代表同意力扣
                            <a href="/" className="detail"> 用户协议 </a>
                            和
                            <a href="/" className="detail"> 隐私政策</a>
                                </p>
                                <p className="second">
                                    <a href="/">关于我们</a>
                                    <a href="/"> 问题反馈 </a>
                                    <a href="/">帮助中心</a>
                                </p>
                            </Info>
                        </LoginBox>
                    </LoginWrapper>
                }
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    way: state.getIn(["login", "way"]),
    login: state.getIn(["login", "login"]),
});

const mapDispatch = (dispatch) => {
    return {
        handleWayChange(way) {
            dispatch(actionCreators.changeWay(way));
        },

        handleLogin() {
            let account = this.account.current.state.value;
            let password = this.password.current.state.value;
            dispatch(actionCreators.accountOrPhoneLogin(account, password));
            dispatch(actionCreators.changeLoginState());
        },

        handleEmailReg() {
            let account = this.account.current.state.value;
            let password = this.password.current.state.value;
            let username = this.username.current.state.value;
            dispatch(actionCreators.emailRegister(account, password, username));
        },

        handlePhoneLogin() {
            let phone = this.phone.current.state.value;
            let code = this.code.current.state.value;
            dispatch(actionCreators.phoneLogin(phone, code));
        },

        handleGetCode() {
            this.countDown();
            let phone = this.phone.current.state.value;
            dispatch(actionCreators.getCode(phone));
        },
    }
};

export default connect(mapState, mapDispatch)(Login);