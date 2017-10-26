import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Page extends React.Component {
  render() {
    return (
      <div className="">
        <div className="">
          first Name
        </div>
        <div className="">
          last Name
        </div>
        <div className="">
          <div></div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
