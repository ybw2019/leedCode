import styled from 'styled-components';

export const SearchWrapper = styled.div`
    position:relative;
    width:100%;
    height:36px;
    border-bottom:1px solid #eeeeee;
`;

export const InputWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:525px;
    height:36px;
    .search{
        width:100%;
        height:35px;
        border:none;
        outline:none;
        font-size:12px;
        padding-left:30px;
    }
    .search_icon{
        position:absolute;
        top:10px;
        left:10px;
    }
`;

export const Option = styled.div`
    position:absolute;
    top:0;
    right:0;
    width:175px;
    height:36px;
    .rank_icon{
        display:block;
        height:20px;
        font-size:12px;
        position:absolute;
        top:10px;
        left:20px;
        cursor:pointer;
    }
    .rank_icon:hover{
        color:#2DB55D;
    }
    .split{
        color:#eeeeee;
        position:absolute;
        top:8px;
        left:70px;
    }
    .write{
        color:#ffffff;
        background:#2DB55D;
        outline:none;
        border:none;
        border-radius:4px;
        font-size:12px;
        padding:4px 10px;
        text-align:center;
        position:absolute;
        top:6px;
        left:90px;
        cursor:pointer;
    }
    .iconfont{
        font-size:12px;
        cursor:pointer;
    }
    .changed_rank_icon{
        display:block;
        height:20px;
        font-size:12px;
        position:absolute;
        top:10px;
        left:120px;
        cursor:pointer;
    }
    .changed_rank_icon:hover{
        color:#2DB55D;
    }
`;

export const Labels = styled.div`
    width:100%;
    height:36px;
    border-bottom:1px solid #eeeeee;
    .label{
        float:left;
        font-size:12px;
        color:#262626;
        background:#F0F0F0;
        height:20px;
        line-height:20px;
        padding:0 8px;
        border-radius:8px;
        margin-top:7px;
        margin-left:10px;
        cursor:pointer;
    }.focused{
        float:left;
        font-size:12px;
        color:#2DB55D;
        background:#D5F0DF;
        height:20px;
        line-height:20px;
        padding:0 8px;
        border-radius:8px;
        margin-top:7px;
        margin-left:10px;
    }
    .more{
        display:block;
        float:right;
        margin:10px 10px 0 10px;
        cursor:pointer;
    }
`;

export const Solutions = styled.div`
    width:100%;
    height:100%;
    .pages{
        margin:20px 0;
        text-align:center;
    }
`;

export const Item = styled.div`
    overflow:hidden;
    width:685px;
    height:130px;
    padding:16px;
    border-bottom:1px solid #eeeeee;
    &:hover{
        background:#F7F7F7;
    }
    .left{
        float:left;
        width:128px;
        height:96px;
        cursor:pointer;
    }img{
        width:128px;
        height:96px;
    }
    .right{
        float:left;
        width:500px;
        height:96px;
        margin-left:20px;
    }
    .top{
        width:500px;
    }.userPic{
        display:block;
        margin:0 10px 0 0;
        float:left;
        width:20px;
        height:20px;
        border-radius:10px;
    }
    .title{
        font-size:14px;
        height:20px;
        line-height:20px;
        cursor:pointer;
    }
    .content{
        overflow:hidden;
        margin:10px 0;
        float:left;
        width:500px;
        height:32px;
        cursor:pointer;
    }.info{
        height:32px;
        line-height:16px;
        font-size:12px;
    }
    .options{
        float:left;
        height:24px;
        width:240px;
    }.iconfont{
        cursor:pointer;
        margin-right:15px;
    }
    .iconfont:hover{
        color:#2DB55D;
    }
`;