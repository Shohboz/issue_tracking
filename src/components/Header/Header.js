import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadAll as load } from "redux/presets/actions";

const NavItem = ({ name: title, list }, idx) => (
  <NavDropdown key={idx} title={title} id={`dropdown-${idx}`}>
    {list.map(item => (
      <MenuItem key={item.id} href={`/${item.name}/${item.id}`}>
        {item.name}
      </MenuItem>
    ))}
  </NavDropdown>
);

const Header = ({ items }) => (
  <Navbar fluid={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={"/"}>issue tracking</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>{items.map(NavItem)}</Nav>
  </Navbar>
);

class Container extends Component {
  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { list } = this.props;
    return <Header items={list} />;
  }
}

const mapStateToProps = state => {
  const { presets: { main: { isFetching, errors, list } } } = state;
  return {
    errors,
    list,
    isFetching
  };
};

export default connect(mapStateToProps, { load })(Container);
