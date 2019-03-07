import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers } from "../actions";
import "../App.css";

class DragAndDrop extends Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "lightgreen" },

      { name: "React", category: "wip", bgcolor: "pink" },

      { name: "Vue", category: "complete", bgcolor: "skyblue" },

      { name: "node", category: "wip", bgcolor: "steelblue" },

      { name: "python", category: "wip", bgcolor: "lightblue" }
    ]
  };

  onDragOver = e => {
    e.preventDefault();
  };
  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };
  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter(task => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });
    this.setState({
      ...this.state,
      tasks
    });
  };
  render() {
    const {fetchUsers}= this.props;
    const tasks = { wip: [], complete: [] };
    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });
    return (
      <div className="container-drag">
        <h2 className="header">DRAG & DROP</h2>
        <div>
          <button onClick={fetchUsers}>Get Users</button>
        </div>
        <div
          className="wip"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, "wip");
          }}
        >
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "complete")}
        >
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers: fetchUsers
    },
    dispatch
  );

export default connect(mapStateToProps,mapDispatchToProps)(DragAndDrop);
