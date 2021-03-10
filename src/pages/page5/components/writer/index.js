import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, Editor } from './style';
import E from 'wangeditor';
import * as actionCreator from './store/actionCreators';

class Writer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            editorContent: '',
        };
    }

    componentDidMount() {
        const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        const editor = new E(elemMenu, elemBody);
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.config.onchange = html => {
            console.log(editor.txt.html())
            this.setState({
                // editorContent: editor.txt.text()
                editorContent: editor.txt.html()
            })
        };
        editor.config.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'image',  // 插入图片
            'table',  // 表格
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ];
        editor.config.uploadImgShowBase64 = true;
        editor.create();
    };

    textAreaValue() {
        console.log('编辑器data：', this.state.editorContent)
    }

    render() {
        return (
            <Fragment>
                <WriterWrapper>
                    <input className="title" placeholder="请输入标题"></input>
                    <span className="iconfont options">&#xe662; 添加标签</span>
                    <span className="tip">添加编程语言、方法、知识点等标签</span>
                </WriterWrapper>
                <Editor>
                    <div className="shop">
                        <div className="text-area" >
                            <div ref="editorElemMenu"
                                style={{ backgroundColor: '#f1f1f1', borderTop: "1px solid #F7F7F7" }}
                                className="editorElem-menu">

                            </div>
                            <div
                                style={{
                                    padding: "0 10px",
                                    overflowY: "scroll",
                                    border: "none",
                                    borderTop: "none",
                                    height: "396px"
                                }}
                                ref="editorElemBody" className="editorElem-body">

                            </div>
                        </div>
                    </div>
                </Editor>
            </Fragment>
        )
    }
}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => {
    return {
    }
};
export default connect(mapState, mapDispatch)(Writer);