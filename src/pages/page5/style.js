import styled from 'styled-components';

export const Nav = styled.div`
    height: 40px;
    width: 100%;
    background: #F7F7F7;
    position: relative;
    line-height:40px;
    font-size:13px;
    color:#8C8C8C;
    .bt_1{
        padding:0 25px;
        display:inline-block;
        cursor:pointer;
    }
    .bt_2{
        padding:0 25px;
        display:inline-block;
        cursor:pointer;
    }
    .bt_3{
        padding:0 25px;
        display:inline-block;
        cursor:pointer;
    }
    .bt_4{
        padding:0 25px;
        display:inline-block;
        cursor:pointer;
    }
    .focus{
        color:#262626;
        background:#FFFFFF;
        cursor:pointer;
    }
`;

export const Container = styled.div`
    position:relative;
    background:#F7F7F7;
    width:100%;
    height:580px;
`;

export const LeftWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:704px;
    height:580px;
    background:#ffffff;
    border:1px solid #eeeeee;
    overflow-x:auto;
    overflow-y:auto;
`;

export const RightWrapper = styled.div`
    position:absolute;
    top:0;
    right:0;
    width:820px;
    height:580px;
    background:#ffffff;
    border:1px solid #eeeeee;
`;

export const Options = styled.div`
    position:absolute;
    height:40px;
    line-height:40px;
    top:0;
    right:400px;
    color:#8C8C8C;
    .inputType{
        width:120px;
        height:28px;
        margin-right:10px;
    }
    .item1{
        position:absolute;
        top:0px;
        right:-130px;
    }
    .item2{
        position:absolute;
        top:0px;
        right:-160px;
    }
    .item3{
        position:absolute;
        top:0px;
        right:-190px;
    }
    .item4{
        position:absolute;
        top:0px;
        right:-220px;
    }
    .item5{
        position:absolute;
        top:0px;
        right:-250px;
    }
    .item6{
        position:absolute;
        top:0px;
        right:-280px;
    }
    .smartMode{
        display:inline-block;
        margin-right:200px;
        height:20px;
        line-height:20px;
        padding:0 4px 4px 0;
        span{
            font-size:12px;
        }
    }
    .smartMode:hover{
        background:rgba(0,0,0,.2);
        border-radius:4px;
    }
`;

export const Mock = styled.div`
    display:inline-block;
    height:20px;
    line-height:20px;
    padding-right:10px;
    color:#2DB55D;
    border-right:2px solid #8C8C8C;
    position:absolute;
    top:10px;
    right:-100px;
`;

export const FooterWrapper = styled.div`

`;

export const WriterOption = styled.div`
    position:absolute;
    height:40px;
    top:0;
    left:700px;
    .quit{
        position:absolute;
        top:10px;
        left:14px;
        width:40px;
        height:20px;
        line-height:20px;
        font-size:12px;
        border:1px solid #eeeeee;
        cursor:pointer;
    }.quit:hover{
        border:1px solid #2DB55D;
        color:#2DB55D;
    }
    .view{
        display:inline-block;
        height:14px;
        width:60px;
        position:absolute;
        top:14px;
        left:600px;
        font-size:14px;
        cursor:pointer;
    }.view:hover{
        color:#2DB55D;
    }
    .show{
        display:inline-block;
        height:14px;
        width:80px;
        position:absolute;
        top:14px;
        left:670px;
        font-size:14px;
        cursor:pointer;
    }.show:hover{
        color:#2DB55D;
    }
`;

export const SolutionOption = styled.div`
    position:absolute;
    height:40px;
    top:0;
    left:700px;
    .quit{
        position:absolute;
        top:10px;
        left:14px;
        width:40px;
        height:20px;
        font-size:12px;
        border:1px solid #eeeeee;
        cursor:pointer;
    }.quit:hover{
        border:1px solid #2DB55D;
        color:#2DB55D;
    }
`;