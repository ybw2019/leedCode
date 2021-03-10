import React, { PureComponent } from 'react';
import { HeaderWrapper, Logo, NavWrapper, NavItem } from './style';
import { GlobalStyle } from '../../statics/iconfont/iconfont';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends PureComponent {
    render() {
        const { imageUrl } = this.props;
        return (
            <HeaderWrapper>
                <GlobalStyle />
                <Link to="/">
                    <Logo />
                </Link>
                <NavWrapper>
                    <NavItem className="left">学习</NavItem>
                    <Link to="/problem">
                        <NavItem className="left" style={{ color: "#000" }}>题库</NavItem>
                    </Link>
                    <NavItem className="left">讨论</NavItem>
                    <NavItem className="left">竞赛</NavItem>
                    <NavItem className="left">求职</NavItem>
                    <NavItem className="left shop">
                        <span className="iconfont">&#xe6c8;</span>
                        商店
                        <span className="iconfont">&#xe67e;</span>
                    </NavItem>
                    <NavItem className="right app">
                        <span className="info1 iconfont">&#xe637;</span>
                        <span className="info2">下载 App</span>
                    </NavItem>
                    <NavItem className="right plus">
                        <span className="info3 iconfont">Plus</span>
                        <span className="info4">会员</span>
                    </NavItem>
                    <NavItem className="right language">
                        <span className="info5">中</span>
                        <span className="info6 iconfont">&#xe67e;</span>
                    </NavItem>
                    <NavItem className="right play">
                        <span className="info7 iconfont">&#xe6c8;</span>
                    </NavItem>
                    <NavItem className="right notice">
                        <span className="info8 iconfont">&#xe600;</span>
                    </NavItem>
                    <Link to="/login">
                        <NavItem className="right user">
                            {imageUrl ? <img src={imageUrl} className="info10" alt="" /> : <span className="info9 iconfont">&#xe620;</span>}
                        </NavItem>
                    </Link>
                </NavWrapper>
            </HeaderWrapper>
        )
    }
}

const mapState = (state) => ({
    imageUrl: state.getIn(["header", "imgUrl"]),
});

const mapDispatch = (dispatch) => {
    return {
    }
};
export default connect(mapState, mapDispatch)(Header);