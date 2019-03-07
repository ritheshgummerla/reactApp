import React, { Component } from "react";
import Users from "./UserList";
import{ connect } from "react-redux"

class AddUser extends Component {
  state = {
    info: {
      name: "",
      age: "",
      mobile: ""
    },
    id: "",
    onEdit: false,
    list: []
  };
  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({
      info: {
        ...this.state.info,
        [name]: value
      }
    });
  };
  onSubmit = () => {
    if (this.state.onEdit) {
      var foundIndex = this.state.list.findIndex(
        (item, i) => i === this.state.id
      );
      const list = [...this.state.list]
      list[foundIndex] = this.state.info;
      this.setState({
        ...list,
        onEdit: false
      });
    } else {
      const { list, info } = this.state;
      list.push(info);
      this.setState(list);
      console.log(this.state.list);
    }
    this.setState({
      info: {
        name: "",
        age: "",
        mobile: ""
      }
    });
  };
  onEdit = (item, id) => {
    this.setState({
      info: item,
      onEdit: true,
      id: id
    });
  };
  onDelete = id => {
    this.state.list.splice(id, 1);
    this.setState(this.state.list);
  };
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <button onClick={this.props.onNameCahnge}>change name</button>
        <h3>Add User {this.props.data.reducer.name}</h3>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.info.name}
          onChange={this.onHandleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={this.state.info.age}
          onChange={this.onHandleChange}
        />
        <br />
        <input
          type="number"
          name="mobile"
          placeholder="mobile"
          value={this.state.info.mobile}
          onChange={this.onHandleChange}
        />
        <br />
        <button onClick={this.onSubmit}>
          {this.state.onEdit ? "Update" : "Submit"}
        </button>
        <hr />
        <Users
          data={this.state.list}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}
const mapStateToProps=state=>({
     data:state
})
const mapDispatchToProps = dispatch => {
  return {
    onNameCahnge: () => dispatch({ type: 'ON_CHANGE' })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
