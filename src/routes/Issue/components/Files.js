import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { loadAll as load } from "redux/files/actions";

const File = ({ filename, path }) => (
  <li>
    <span alt={path}>{filename}</span>
  </li>
);

class Files extends Component {
  componentDidMount() {
    const { match: { params: { issueID } }, load } = this.props;
    load(issueID, "issues");
  }

  render() {
    const { list } = this.props;
    return (
      <Col xs={12} md={12}>
        <hr className="hr-text" data-content={"Файлы"} />
        <Col xs={12} md={12}>
          <ul className="list-unstyled">
            {list.map((file, idx) => <File key={idx} {...file} />)}
          </ul>
        </Col>
      </Col>
    );
  }
}

export default connect(({ issues: { current: { files } } }) => ({ ...files }), {
  load
})(Files);
