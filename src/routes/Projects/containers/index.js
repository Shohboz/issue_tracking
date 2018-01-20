import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap";
import { loadAll as load } from "redux/projects/actions";
import Preloader from "components/Preloader";
import ErrorPage from "components/ErrorPage";
import Projects from "../components/Panel";

class App extends Component {
  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { errors, list, isFetching } = this.props;
    return (
      <Grid>
        {isFetching && <Preloader />}
        {!isFetching && !errors && <Projects items={list} />}
        {errors && <ErrorPage errors={errors} />}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { projects: { main: { isFetching, errors, list } } } = state;
  return {
    errors,
    list,
    isFetching
  };
};

export default connect(mapStateToProps, { load })(App);
