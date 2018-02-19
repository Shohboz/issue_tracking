import React from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";
import NoItems from "components/EmptyList";
import { components } from "components/ComposableList";
const { Enhanced, Sort } = components;

const DisableIcon = () => (
  <i className="text-danger glyphicon glyphicon-remove" title={"выключен"} />
);
const EnableIcon = () => (
  <i className="text-success glyphicon glyphicon-ok" title={"включен"} />
);

const SORTS_ASC_DESC = {
  ASC: <small><span className="glyphicon glyphicon-triangle-bottom" /></small>,
  DESC: <small><span className="glyphicon glyphicon-triangle-top" /></small>
};

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>
        <Sort sortKey={"name"} sortFn={x => x.name} suffix={SORTS_ASC_DESC}>
          Имя
        </Sort>
      </th>
      <th>
        <Sort sortKey={"login"} sortFn={x => x.login} suffix={SORTS_ASC_DESC}>
          Логин
        </Sort>
      </th>
      <th>
        <Sort sortKey={"email"} sortFn={x => x.email} suffix={SORTS_ASC_DESC}>
          Email
        </Sort>
      </th>
      <th>Включен</th>
      <th>Роль</th>
    </tr>
  </thead>
);

const Item = ({ id, name, login, email, enable, role }) => (
  <tr>
    <td>{id}</td>
    <td>
      <Link to={`/users/${id}`}>{name}</Link>
    </td>
    <td>{login}</td>
    <td>{email}</td>
    <td>{enable ? <EnableIcon /> : <DisableIcon />}</td>
    <td>{role}</td>
  </tr>
);

const TableBody = ({ items }) => (
  <tbody>{items.map(item => <Item key={item.id} {...item} />)}</tbody>
);

export default ({ items, uniqueKey }) => (
  <Panel.Body>
    <div className="table-responsive">
      <Enhanced uniqueKey={uniqueKey}>
        <table className="table table-striped">
          {items.length
            ? [
                <TableHeader key="users-header" />,
                <TableBody items={items} key="users-list" />
              ]
            : <NoItems />}
        </table>
      </Enhanced>
    </div>
  </Panel.Body>
);
