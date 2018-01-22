import React, { Component } from "react";
import { SUCCESS } from "redux/notifications/constants";

export default class Notification extends Component {
  onClick = () => {
    const { deleteNotification, message: { id: messageID } } = this.props;
    deleteNotification(messageID);
  };

  render() {
    const { message: { type, text } } = this.props;
    return (
      <div
        className={`notification alert ${type === SUCCESS
          ? "alert-success"
          : "alert-danger"}`}
      >
        <button onClick={this.onClick} className="close">
          <span>&times;</span>
        </button>
        {text}
      </div>
    );
  }
}
