import React, { Component } from "react";
import Form from "../containers/Form";

const Header = ({ onClick }) => (
  <div className="form-inline">
    <button
      className="btn btn-default btn-success"
      title="Добавить комментарий"
      onClick={onClick}
    >
      <i className="glyphicon glyphicon-plus" />
    </button>
  </div>
);

export default class AddComment extends Component {
  state = {
    isOpen: false
  };

  onClick = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentID) {
      this.setState({ isOpen: false });
    }
  }

  onClose = e => {
    e && e.preventDefault();
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { match } = this.props;
    return (
      <div>
        {isOpen ? (
          <Form match={match} onClose={this.onClose} />
        ) : (
          <Header onClick={this.onClick} />
        )}
      </div>
    );
  }
}
