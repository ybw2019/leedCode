import styled from 'styled-components';
import logoPic from '../../statics/logo.svg';

export const HeaderWrapper = styled.div`
    overflow:hidden;
    position:relative;
    width:100%;
    height:44px;
    border-bottom:1px solid #eee;
    background:#fff;
`;

export const Logo = styled.div`
    position:absolute;
    cursor:pointer;
    top:12px;
    left:190px;
    width:48px;
    height:20px;
    background:url(${logoPic});
    background-size:contain;
`;

export const NavWrapper = styled.div`
    width:1120px;
    height:100%;
    position:absolute;
    top:0;
    left:238px;
`;

export const NavItem = styled.div`
    cursor:pointer;
    line-height:44px;
    font-size:13px;
    &.left{
        float:left;
        margin-left:20px;
        color:#000;
    }&.shop{
        color:orange;
    }

    &.right{
        position:absolute;
    }&.app{
        top:6px;
        right:270px;
        width:84px;
        height:28px;
        border:2px solid #2DB55D;
        border-radius:3px;
        color:#2DB55D;
    }.info1{
        font-size:12px;
        position:absolute;
        top:-6px;
        right:60px;
    }.info2{
        font-size:12px;
        position:absolute;
        top:-7px;
        right:8px;
    }

    &.right{
        position:absolute;
    }&.plus{
        top:6px;
        right:170px;
        width:84px;
        height:28px;
        border:2px solid #FFA116;
        border-radius:3px;
        color:#FFA116;
    }.info3{
        font-size:12px;
        position:absolute;
        top:-6px;
        right:44px;
    }.info4{
        font-size:12px;
        position:absolute;
        top:-6px;
        right:14px;
    }

    &.right{
        position:absolute;
    }&.language{
        top:6px;
        right:100px;
        width:84px;
        height:28px;
        color:gray;
    }.info5{
        font-size:14px;
        font-weight:bold;
        position:absolute;
        top:-6px;
        right:30px;
    }.info6{
        position:absolute;
        top:-6px;
        right:14px;
    }

    &.right{
        position:absolute;
    }&.play{
        top:6px;
        right:100px;
        width:84px;
        height:28px;
        color:gray;
    }.info7{
        font-size:20px;
        font-weight:bold;
        position:absolute;
        top:-6px;
        right:-20px;
    }

    &.right{
        position:absolute;
    }&.notice{
        top:6px;
        right:100px;
        width:84px;
        height:28px;
        color:gray;
    }.info8{
        font-size:16px;
        font-weight:bold;
        position:absolute;
        top:-6px;
        right:-50px;
    }

    &.right{
        position:absolute;
    }&.user{
        top:6px;
        right:100px;
        width:84px;
        height:28px;
        color:gray;
    }.info9{
        font-size:16px;
        font-weight:bold;
        position:absolute;
        top:-6px;
        right:-86px;
    }

    &.right{
        position:absolute;
    }&.user{
        top:6px;
        right:100px;
        width:84px;
        height:28px;
        color:gray;
    }.info10{
        font-size:16px;
        width:20px;
        border-radius:10px;
        font-weight:bold;
        position:absolute;
        top:5px;
        right:-86px;
    }
`;