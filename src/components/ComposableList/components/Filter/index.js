import React, { Component } from "react";
import { search } from "../../redux/search/actions";
import { connect } from "react-redux";

class Search extends Component {
  onChange = event => {
    const { target } = event;
    const { search, uniqueKey, searchBy } = this.props;
    search(uniqueKey, searchBy, target.value);
  };

  onReset = () => {
    const { search, uniqueKey, searchBy } = this.props;
    search(uniqueKey, searchBy, "");
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 search-filter">
          <div className="input-group">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-search" />
            </span>
            <input
              value={this.props.text}
              onChange={this.onChange}
              type="text"
              className="form-control"
              placeholder={this.props.placeholder || "Поиск по названию"}
            />
            <span
              className="input-group-addon btn"
              onClick={this.onReset}
              type="button"
            >
              <span className="glyphicon glyphicon-remove" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => {
    const { uniqueKey } = ownProps;
    const { composableList: { search } } = state;
    return {
      text: (search[uniqueKey] && search[uniqueKey].text) || ""
    };
  },
  { search }
)(Search);
