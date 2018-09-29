import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import TabIndex from './tabIndex';

function Root({tabs}) {
  return (
    <div>
      <Clock />
      <TabIndex tabs={tabs}/>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let array = [
  {"index" : "one", "value" :"I am the first"},
  {"index" : "two", "value" : "Second pane here"},
  {"index": "three", "value" :"Third pane here"}];
  ReactDOM.render(
    <Root tabs={array} />,
    root
  );
});
