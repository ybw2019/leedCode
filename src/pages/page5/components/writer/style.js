import styled from 'styled-components';

export const WriterWrapper = styled.div`
    position:relative;
    padding:10px 20px 0 20px;
    .title{
        position:absolute;
        top:10px;
        width:98%;
        height:32px;
        border:none;
        outline:none;
        color:#585858;
        font-size:20px;
        margin-bottom:10px;
    }
    .options{
        width:92px;
        height:32px;
        line-height:32px;
        position:absolute;
        top:60px;
        left:20px;
        color:#595959;
        font-size:12px;
        background:#F7F7F7;
        text-align:center;
        border-radius:14px;
        cursor:pointer;
    }
    .tip{
        position:absolute;
        top:68px;
        left:120px;
        color:#8C8C8C;
        font-size:13px;
    }
`;

export const Editor = styled.div`
    position:absolute;
    top:140px;
    width:100%;
`;