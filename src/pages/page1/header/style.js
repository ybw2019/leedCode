import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  // width: 100%;
  // ************* 这里将10% 改为33% ************** 
  margin: 100px 33%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  padding: 10px;
  color: #fff;
  min-width: 400px; 
`;

export const HeaderItem = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  line-height: 50px;
  height:50px;
  text-align: center;
  border-right: 1.4px solid #dfe1e5;
  border-left: 1.4px solid #dfe1e5;
  transform-style: preserve-3d;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
		transform: rotateX(90deg);
  }
  .link: active {
    color:#1547b4;
  }
`;

export const HeaderHome = styled.div`
  background-color: #e8f1f8;
  z-index: 11;
  transform: translateZ(25px);
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  perspective: 300px;
  border-radius: 4px;
  .iconfont {
    font-size: 32px;
    color: #262626;
  }
`;

export const HeaderName = styled.div`
  background-color:#d0dced;
  transform: translateY(25px) rotateX(-90deg);
  border-radius: 4px;
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	perspective: 300px;
`;


