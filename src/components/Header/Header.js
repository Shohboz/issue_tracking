import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadAll as load } from "redux/presets/actions";
import { load as loadAccount } from "redux/account/actions";
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

const Account = ({ name }) => (
  <NavDropdown title={name} id="dropdown-account">
    <MenuItem href="/account/profile">Профиль</MenuItem>
    {/*<MenuItem href="/account/logout">Выйти</MenuItem>*/ ""}
  </NavDropdown>
);

const Header = ({ account, items: { projects, departments } }) => (
  <Navbar fluid={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={"/"}>issue tracking</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      {projects &&
        <NavItemDropDown title="Проекты" name="projects" {...projects} />}
      {!projects && <NavItem href={"/projects"}>Проекты</NavItem>}
      {departments &&
        <NavItemDropDown title="Отделы" name="departments" {...departments} />}
      {!departments && <NavItem href={"/departments"}>Отделы</NavItem>}
      <NavItem href={"/users"}>Пользователи</NavItem>
      <NavItem href={"/issues"}>Вопросы</NavItem>
      <NavItem href={"/archived_projects"}>Архивные проекты</NavItem>
    </Nav>
    <Nav pullRight>{account && <Account {...account} />}</Nav>
  </Navbar>
);

class Container extends Component {
  componentDidMount() {
    const { load, loadAccount } = this.props;
    load();
    loadAccount();
  }

  render() {
    const { list, account } = this.props;
    return <Header items={list} account={account} />;
  }
}

const mapStateToProps = state => {
  const { presets: { main: { isFetching, errors, list } } } = state;
  const { account: { main: { data: account } } } = state;
  return {
    errors,
    list,
    isFetching,
    account
  };
};

export default connect(mapStateToProps, { load, loadAccount })(Container);
