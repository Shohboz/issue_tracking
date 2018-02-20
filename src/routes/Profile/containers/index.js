import React, { Fragment } from "react";
import { connect } from "react-redux";
import Profile from "../components/Panel";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import { update } from "redux/account/actions";

const ProfileContainer = ({ errors, data, isFetching, update }) => (
  <Fragment>
    {isFetching && <Preloader />}
    {!isFetching && !errors && <Profile {...data} onSave={update} />}
    {errors && <ErrorPage errors={errors} />}
  </Fragment>
);

export default connect(
  ({ account: { main: initialValues } }) => ({
    ...initialValues,
    initialValues
  }),
  { update }
)(ProfileContainer);
