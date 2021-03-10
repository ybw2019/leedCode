import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { CodeArea } from './style';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import * as actionCreator from './store/actionCreators';

class SolutionCode extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            codes: null,
        };
    }

    render() {
        return (
            <Fragment>
                <CodeArea id="monaco" style={{ height: "580px", width: "820px" }}></CodeArea>
            </Fragment>
        )
    }

    componentDidMount() {
        const { language, value, initInstance } = this.props;
        const code = monaco.editor.create(document.getElementById("monaco"), {
            value: `${value}`,
            language: `${language}`
        });
        initInstance(code);
    }

    // componentWillUpdate() {
    //     if (this.props.instance !== null) {
    //         this.props.instance.dispose();
    //         const { language, value } = this.props;
    //         const code = monaco.editor.create(document.getElementById("monaco"), {
    //             value: `${value}`,
    //             language: `${language}`
    //         });
    //         this.props.initInstance(code);
    //     } else {
    //         return
    //     }
    // }
}

const mapState = (state) => ({
    language: state.getIn(["code", "language"]),
    value: state.getIn(["code", "value"]),
    instance: state.getIn(["code", "instance"]),
});

const mapDispatch = (dispatch) => {
    return {
        initInstance(code) {
            dispatch(actionCreator.initCode(code));
        }
    }
};
export default connect(mapState, mapDispatch)(SolutionCode);