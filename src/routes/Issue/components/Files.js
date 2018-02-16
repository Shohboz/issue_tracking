import React, { Fragment, Component } from "react";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { loadAll as load } from "redux/files/actions";

const File = ({ filename, path }) => (
  <Fragment>
    <span alt={path}>{filename}</span>
    <br />
  </Fragment>
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
          <p>{list.map((file, idx) => <File key={idx} {...file} />)}</p>
        </Col>
      </Col>
    );
  }
}

export default connect(({ issues: { current: { files } } }) => ({ ...files }), {
  load
})(Files);
