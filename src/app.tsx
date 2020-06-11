import React from 'react';
import ReactDom from 'react-dom';
// import './types';
// import './interf';
import './enum';

const App = () => {
    let a: string = '8';
    a = '4';
    return (<p>Variable from ts syntax - {a}</p>);
}

ReactDom.render(<App/>, document.getElementById('root') as HTMLElement);


