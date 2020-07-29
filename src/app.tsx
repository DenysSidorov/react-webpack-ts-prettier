import React from 'react';
import ReactDom from 'react-dom';
import './clean_ts_examples/3_enum';

const App = () => {
    let a: string = '8';
    a = '4';


    return (<p>Variable from ts syntax - {a}</p>);
}

ReactDom.render(<App/>, document.getElementById('root') as HTMLElement);


