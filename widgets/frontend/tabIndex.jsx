import React from 'react';
import TabIndexItem from './tabIndexItem'

class TabIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    const {tabs} = this.props;
    return (<ul>
      {tabs.map(tab =>
<TabIndexItem tabName={tab.index} tabValue={tab.value} />)}
    </ul>);
  }
}

export default TabIndex;
