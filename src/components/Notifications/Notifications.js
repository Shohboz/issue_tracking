import React, { Component } from "react";
import { connect } from "react-redux";
import Notification from "./Notification";
import { deleteNotification } from "redux/notifications/actions";

class Notifications extends Component {
  render() {
    const messages = this.props.messages.map((message, key) => (
      <Notification
        key={message.id}
        message={message}
        deleteNotification={this.props.deleteNotification}
      />
    ));
    return <div className="notifications-container">{messages}</div>;
  }
}

const mapStateToProps = ({ notifications: messages }) => ({
  messages
});

export default connect(mapStateToProps, { deleteNotification })(Notifications);
