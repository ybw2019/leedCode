import styled from 'styled-components';

export const ContentWrapper = styled.div `
  // 将10%  改为 33.5%试一试
  margin: -30px 33.5%;  
  background: #eaf1f7;
  border-radius: 4px;
  /*******  增加了一个最小值  *******/
  min-width: 500px; 
`;

export const Question = styled.div `
  overflow: hidden;
  border-radius: 4px;
  border: 1 solid #dfe1e5;
  background: #d2dceb;
  .iconfont {
    float: left;
    line-height: 44px;
    padding-left: 10px;
    font-size: 36px;
    color: #444444
  }
`;

export const Title = styled.div `
  float: left;
  margin-top: 12px;
  font-size: 20px;
  color: #000000;
`;

export const Info = styled.div `
  clear: both;       // 防止上面的float影响
  padding: 10px;
  font-size: 15px;
  line-height: 18px;
  color: #666666;
  .iconfont {
    float: right;
    padding-top: 4px;
    padding-left: 2px;
    font-size: 33px;
    color: #666666;
    cursor: pointer;
    &: hover {
      color: #090821;
    }
  }
`;

export const Label= styled.label `
  float: right;
  line-height: 50px;
  font-size: 12px;
  color: #090821
`;


export const Talk = styled.div `
overflow: hidden;
  min-height: 10rem;
  border-radius: 4px;
  border: 1 solid #dfe1e5;
.iconfont {
  font-size: 20px;
  color: #444444;
}
.talk {
  float: right;
  font-size: 8px;
  line-height: 22px;
  .iconfont {
    float: right;
    padding-right: 8px;
    font-size: 20px;
    color: #666666;
    cursor: pointer;
    &: hover {
      color: #090821;
    }
  }
}
`;

export const Space = styled.div `
  height: 20px;
`;

export const AInfo = styled.div `
  min-height: 5rem;
  background: #d2dceb;
  padding: 10px;
  font-size: 13px;
  line-height: 18px;
  color: #666666;
  border-radius: 6px;
  .iconfont {
    float: left;
    font-size: 24px;
  }
  .info {
    clear: both;
    font-size: 12px;
    padding: 8px;
  }
`;

export const User = styled.div `
  float: left;
  font-size: 10px;
  color: #090920;
`;

export const Answer = styled.div `
overflow: hidden;
min-height: 5rem;
margin: 4px 3%;
border-radius: 4px;
border: 1 solid #dfe1e5;
background: #cfddfc;
`;