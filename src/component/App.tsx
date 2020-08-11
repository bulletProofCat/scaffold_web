import * as React from 'react';
import {connect} from 'react-redux';

import {triggerTick, onTick} from '../actions';

function mapStateToProps(state: any, ownProps: any) {
    console.log("mapStateToProps", state, ownProps);
    return {tick: state.tick};
}

interface AppProps extends React.ClassAttributes<App> {
    onTick: any;
    name: string;
    tick: number, triggerTick: any
}

class App extends React.PureComponent<AppProps> {

    handle: any;
    
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.handle = setInterval(() => {
            this.props.onTick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.handle);
    }

    render() {
        return (
        <div>
            <p>hello, {this.props.name}</p>
            <p>tice: {this.props.tick}</p>
            <p onClick={this.props.triggerTick}>triggerTick</p>
        </div>
        );
    }
}

// second parameter might seem strange, check here: 
// https://react-redux.js.org/api/connect#object-shorthand-form
export default connect(mapStateToProps, {triggerTick, onTick})(App);
