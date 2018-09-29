import React from 'react';

const TabIndexItem = (props) => {
  return (
    <div className={props.tabName}>
      <h1>{props.tabName}</h1>
      <p>{props.tabValue}</p>
    </div>
  );
};

export default TabIndexItem;
