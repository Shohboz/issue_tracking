import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../components/Form";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import { save } from "redux/issues/actions";
import { load, reset } from "redux/issue/actions";
import { loadAll as loadUsers } from "redux/users/actions";

class ReduxForm extends Component {
  onSubmit = data => {
    const { save } = this.props;
    save(data);
  };

  componentDidMount() {
    const {
      load,
      reset,
      loadUsers,
      match: { params: { issueID: id } }
    } = this.props;
    id ? load(id) : reset();
    loadUsers();
  }

  render() {
    const { isFetching, errors } = this.props;
    return (
      <div>
        {isFetching && <Preloader />}
        {!isFetching && <Form {...this.props} onSubmit={this.onSubmit} />}
        {errors && <ErrorPage errors={errors} />}
      </div>
    );
  }
}

const optionsStatus = [
  { value: "open", label: "open" },
  { value: "closed", label: "closed" },
  { value: "urgent", label: "urgent" }
];

const mapStateToProps = (state, ownProps) => {
  const {
    issues: { current: { main: { data: initialValues, isFetching, errors } } },
    users: { main: { list } }
  } = state;
  const optionsUsers = list.map(x => ({ value: x.id, label: x.name }));
  return {
    ...ownProps,
    initialValues,
    isFetching,
    optionsStatus,
    optionsUsers,
    errors
  };
};

export default connect(mapStateToProps, { save, reset, load, loadUsers })(
  ReduxForm
);
