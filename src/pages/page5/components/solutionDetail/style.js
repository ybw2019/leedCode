import styled from 'styled-components';

export const Wrapper = styled.div`
    width:818px;
    height:580px;
    overflow-x:auto;
    overflow-y:auto;
`;

export const Top = styled.div`
    position:relative;
    width:760px;
    height:72px;
    margin:20px auto;
    border-bottom:1px solid #8C8C8C;
    .user_pic{
        position:absolute;
        top:0;
        left:0;
        display:block;
        width:20px;
        height:20px;
        border-radius:10px;
    }
    .nickname{
        position:absolute;
        top:0;
        left:30px;
        font-size:16px;
    }
    .inputTime{
        position:absolute;
        top:0;
        left:70px;
    }
    .solutionInfo{
        width:760px;
        height:72px;
        position:absolute;
        font-size:12px;
        top:40px;
        left:0;
        color:#8C8C8C;
    }
    .view{
        position:absolute;
        top:0;
        left:180px;
        font-size:12px;
    }
    .label{
        position:absolute;
        top:-5px;
        left:250px;
        color:#262626;
        background:#F0F0F0;
        height:20px;
        line-height:20px;
        padding:0 8px;
        border-radius:8px;
        cursor:pointer;
    }
`;

export const Content = styled.div`
    width:760px;
    margin:20px auto;
    color:#262626;
    line-height:40px;
`;

export const Footer = styled.div`
    position:relative;
    width:760px;
    height:20px;
    line-height:20px;
    color:#8C8C8C;
    margin:0 auto;
    padding-bottom:40px;
    border-bottom:1px solid #8C8C8C;
    .next{
        position:absolute;
        top:0;
        left:0;
        font-size:12px;
    }
    .right{
        position:absolute;
        top:0;
        right:0;
        font-size:12px;
    }
`;

export const WriterArea = styled.div`
    position:relative;
    width:760px;
    height:20px;
    line-height:20px;
    margin:10px auto;
    color:#595959;
    .next_ico{
        font-size:13px;
    }
    .number_ico{
        font-size:13px;
    }
    .rank{
        margin-left:655px;
        font-size:12px;
    }
    .rank_ico{
        font-size:12px;
    }
    .writer{
        margin:20px 0 20px 0;
    }
`;

export const CommentArea = styled.div`
    position:relative;
    height:160px;
    width:760px;
    margin:0 auto;
    top:120px;
    left:0;
    margin-bottom:20px;
    .top{
        width:760px;
        height:30px;
    }
    .user_pic{
        width:30px;
        height:30px;
        border-radius:15px;
        cursor:pointer;
    }
    .nickname{
        color:#595959;
        font-size:14px;
        position:absolute;
        top:10px;
        left:40px;
        cursor:pointer;
    }
    .time{
        color:#595959;
        font-size:14px;
        position:absolute;
        top:10px;
        right:0;
    }
    .content{
        margin:10px 0 20px 0;
        width:760px;
    }
    .comment{
        font-size:12px;
        height:20px;
        line-height:20px;
        color:#595959;
    }
    .footer{
        width:760px;
        position:absolute;
        top:130px;
        left:0;
        color:#8C8C8C;
    }
    .nice{
        font-size:12px;
        margin-right:10px;
        cursor:pointer;
    }
    .bad{
        font-size:12px;
        margin-right:10px;
        cursor:pointer;
    }
    .reply{
        font-size:12px;
        cursor:pointer;
    }
`;