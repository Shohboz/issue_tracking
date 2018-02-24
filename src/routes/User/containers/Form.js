import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Form from "../components/Form";
import UpdateForm from "../components/UpdateForm";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import { save } from "redux/users/actions";
import { load, reset } from "redux/user/actions";

class ReduxForm extends Component {
  onSubmit = data => {
    const { save } = this.props;
    save(data);
  };

  componentDidMount() {
    const { load, reset, match: { params: { userID: id } } } = this.props;
    id ? load(id) : reset();
  }

  onSave = data => {
    const { match: { params: { userID: id } } } = this.props;
    this.props.save({
      ...data,
      id
    });
  };

  render() {
    const { isFetching, errors, match: { params: { userID } } } = this.props;
    const Panel = userID ? UpdateForm : Form;
    return (
      <Fragment>
        {isFetching && <Preloader />}
        {!isFetching &&
          <Panel
            {...this.props}
            onSubmit={this.onSubmit}
            onSave={this.onSave}
          />}
        {errors && <ErrorPage errors={errors} />}
      </Fragment>
    );
  }
}

const optionsRole = [
  { value: "admin", label: "admin" },
  { value: "user", label: "user" }
];

const mapStateToProps = (state, ownProps) => {
  const {
    users: { current: { main: { data: initialValues, isFetching, errors } } }
  } = state;
  return {
    ...ownProps,
    ...initialValues,
    initialValues,
    optionsRole,
    isFetching,
    errors
  };
};

export default connect(mapStateToProps, { save, reset, load })(ReduxForm);
