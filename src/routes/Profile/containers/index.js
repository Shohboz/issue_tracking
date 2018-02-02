import React from "react";
import { connect } from "react-redux";
import Profile from "../components/Panel";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";

const ProfileContainer = ({ errors, data, isFetching }) => (
  <div>
    {isFetching && <Preloader />}
    {!isFetching && !errors && <Profile {...data} />}
    {errors && <ErrorPage errors={errors} />}
  </div>
);

export default connect(({ account: { main: initialValues } }) => ({
  ...initialValues,
  initialValues
}))(ProfileContainer);
