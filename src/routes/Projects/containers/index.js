import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap";
import { loadAll as load } from "redux/projects/actions";
import Projects from "../components/Panel";

const Preloader = () => <div>Loading...</div>;
const ErrorPage = () => <div>Error</div>;

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
