import styled from 'styled-components';

export const LoginWrapper = styled.div`
    height:100%;
    position:absolute;
    left:0;
    right:0;
    top:45px;
    bottom:0;
    background:rgba(0,0,0,.5);
`;

export const LoginBox = styled.div`
    margin:100px auto;
    width:400px;
    background:#fff;
    border-radius:4px;
    .phone{
        margin: 0 0 20px 20px;
    }
    .code{
        margin: 0 0 20px 20px;
    }
`;

export const Header = styled.div`
    font-size:28px;
    font-weight:600;
    margin:0 0 32px 20px;
    padding-top:20px;
    color:#262626;
`;

export const GetCode = styled.a`
    position:absolute;
    top:241px;
    left:850px;
    font-size:14px;
    color:#BFBFBF;
    cursor:pointer;
`;

export const Button = styled.button`
    width:348px;
    height:32px;
    font-size:13px;
    color:#fff;
    background:#2DB55D;
    border:none;
    border-radius:4px;
    margin:0 0 20px 20px;
    cursor:pointer;
    outline:none;
`;

export const AccountLogin = styled.a`
    font-size:13px;
    color:gray;
    margin:0 220px 0 20px;
`;

export const EmailRegister = styled.a`
    font-size:13px;
    color:gray;
`;

export const USALogin = styled.div`
    width:300px;
    font-size:13px;
    text-align:center;
    margin:40px auto;
    .title{
        color:gray;
    }
    .iconfont{
        color:gray;
    }
`;

export const MoreWay = styled.div`
    position:relative;
    width:300px;
    height:40px;
    margin:0 auto;
    margin-top:30px;
    .iconfont{
        position:absolute;
        border:1px solid #BFBFBF;
        border-radius:20px;
        padding:10px 10px;
    }&.qq{
        left:20px;
        color:blue;
    }.github{
        left:60px;
        color:black;
    }.wb{
        left:120px;
        color:red;
    }.wechart{
        left:180px;
        color:#2DB55D;
    }.more{
        left:240px;
        color:gray;
    }
`;

export const Info = styled.div`
    width:300px;
    height:50px;
    margin:40px auto;
    text-align:center;
    .first{
        font-size:12px;
        color:#BFBFBF;
    }.detail{
        color:gray;
    }
    .second{
        margin:10px 0;
        font-size:12px;
    }a{
        color:#BFBFBF;
    }
`;

export const CodeLogin = styled.div`
    width:300px;
    font-size:13px;
    text-align:center;
    margin:10px auto;
    padding-bottom: 10px;
    .title{
        color:gray;
        cursor:pointer;
    }
`;

export const CodesLogin = styled.a`
    font-size:13px;
    color:gray;
    margin:0 220px 0 20px;
`;

export const ForgetPass = styled.a`
    font-size:13px;
    color:gray;
`;