import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadAll as load } from "redux/presets/actions";
import { MenuItem, NavItem } from "components/Nav";

const NavItemDropDown = ({ name, title, list }) => (
  <NavDropdown title={title} id={`dropdown-${name}`}>
    {list.map(item => (
      <MenuItem key={item.id} href={`/${name}/${item.id}`}>
        {item.name}
      </MenuItem>
    ))}
    <MenuItem href={`/${name}`}>показать все</MenuItem>
  </NavDropdown>
);

const Header = ({ items: { projects, departments } }) => (
  <Navbar fluid={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={"/"}>issue tracking</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      {projects && (
        <NavItemDropDown title="проекты" name="projects" {...projects} />
      )}
      {departments && (
        <NavItemDropDown title="отделы" name="departments" {...departments} />
      )}
      <NavItem href={"/users"}>пользователи</NavItem>
      <NavItem href={"/issues"}>вопросы</NavItem>
    </Nav>
    <Nav pullRight>
      <NavDropdown title="пользователь" id="dropdown-account">
        <MenuItem href="/account/setup">Настройки</MenuItem>
        <MenuItem href="/account/logout">Выйти</MenuItem>
      </NavDropdown>
    </Nav>
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
