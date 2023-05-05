import * as React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';

class App extends React.PureComponent {

    handle: any;
    
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
        <div>
            <p>hello</p>
            <Button type="primary">Button</Button>
        </div>
        );
    }
}

export default App;
