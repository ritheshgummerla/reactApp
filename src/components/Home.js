import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import User from "./AddUser"
import DargAndDrop from "./DragAndDrop"

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div >
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Dashboard" />
            <Tab label="User" />
            <Tab label="Admin" />
            <Tab label="Drag & Drop" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Dashboard</TabContainer>} 
        {value === 1 && <TabContainer><User /></TabContainer>}
        {value === 2 && <TabContainer>Admin</TabContainer>}
        {value === 3 && <TabContainer><DargAndDrop /></TabContainer>}
      </div>
    );
  }
}

export default SimpleTabs;