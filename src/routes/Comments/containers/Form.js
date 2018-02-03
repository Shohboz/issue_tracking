import React, { Component } from "react";
import { connect } from "react-redux";
import SiteForm from "../components/Form";
import { save } from "redux/comments/actions";

class Form extends Component {
  onSubmit = data => {
    const { save, match: { params: { issueID } }, onClose } = this.props;
    onClose();
    save(Object.assign({}, { ...data }, { issueID }));
  };

  render() {
    const { onClose, isFetching } = this.props;
    return (
      <SiteForm
        {...this.props}
        onClose={onClose}
        isFetching={isFetching}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect(
  ({ issues: { current: { comments: { isFetching } } } }) => ({ isFetching }),
  { save }
)(Form);
