import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../components/Form";
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

const optionsRole = [
  { value: "admin", label: "admin" },
  { value: "user", label: "user" }
];

const mapStateToProps = (state, ownProps) => {
  const {
    users: { current: { main: { data: initialValues, isFetching, errors } } }
  } = state;
  return { ...ownProps, initialValues, optionsRole, isFetching, errors };
};

export default connect(mapStateToProps, { save, reset, load })(ReduxForm);
