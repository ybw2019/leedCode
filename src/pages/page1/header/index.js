import React, { PureComponent } from 'react';
import {
  HeaderWrapper,
  HeaderItem,
  HeaderHome,
  HeaderName,
} from './style';
import { Link } from 'react-router-dom';

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <HeaderItem>
          <HeaderHome>
            <i className='iconfont'>&#xe617;</i>
          </HeaderHome>
          <Link to='/submission' className='link'>
          <HeaderName>
            提交记录
          </HeaderName>  
          </Link>
        </HeaderItem>
        <HeaderItem>
          <HeaderHome>
          <i className='iconfont'>&#xe651;</i>
          </HeaderHome>
          <Link to='/discussion' className='link'>
          <HeaderName>
            讨论发布
          </HeaderName> 
          </Link> 
        </HeaderItem>
      </HeaderWrapper>
    )
  }
}

export default Header;