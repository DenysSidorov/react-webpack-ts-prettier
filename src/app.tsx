import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    let a: string = '8';
    return (<p>Variable from ts syntax - {a}</p>);
}

ReactDom.render(<App/>, document.getElementById('root') as HTMLElement);


