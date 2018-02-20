import React from "react";
import { Panel } from "react-bootstrap";
import {
  toLocaleDateString,
  getStatus,
  getPriority,
  isOutdated
} from "redux/helpers";
import NoItems from "components/EmptyList";
import { components } from "components/ComposableList";
const { Enhanced, Sort } = components;

const SORTS_ASC_DESC = {
  ASC: <small><span className="glyphicon glyphicon-triangle-bottom" /></small>,
  DESC: <small><span className="glyphicon glyphicon-triangle-top" /></small>
};

const TableHeader = ({ secondary }) => (
  <thead>
    <tr>
      <th>ID</th>
      <th>
        <Sort sortKey={"title"} sortFn={x => x.title} suffix={SORTS_ASC_DESC}>
          Название
        </Sort>
      </th>
      <th>
        <Sort sortKey={"status"} sortFn={x => x.status} suffix={SORTS_ASC_DESC}>
          Статус
        </Sort>
      </th>
      <th>
        <Sort
          sortKey={"priority"}
          sortFn={x => x.priority}
          suffix={SORTS_ASC_DESC}
        >
          Приоритет
        </Sort>
      </th>
      {!secondary &&
        <th>
          <Sort
            sortKey={"assignee_id"}
            sortFn={x => x.assignee_id}
            suffix={SORTS_ASC_DESC}
          >
            Исполнитель
          </Sort>
        </th>}
      {!secondary &&
        <th>
          <Sort
            sortKey={"reporter_id"}
            sortFn={x => x.reporter_id}
            suffix={SORTS_ASC_DESC}
          >
            Автор
          </Sort>
        </th>}
      <th>
        <Sort
          sortKey={"due_date"}
          sortFn={x => x.due_date}
          suffix={SORTS_ASC_DESC}
        >
          Выполнить до
        </Sort>
      </th>
      <th>
        <Sort
          sortKey={"meeting_date"}
          sortFn={x => x.meeting_date}
          suffix={SORTS_ASC_DESC}
        >
          Дата совещания
        </Sort>
      </th>
      <th>
        <Sort
          sortKey={"created"}
          sortFn={x => x.created}
          suffix={SORTS_ASC_DESC}
        >
          Дата создания
        </Sort>
      </th>
    </tr>
  </thead>
);

const Item = ({
  secondary,
  id,
  title,
  created,
  meeting_date,
  assignee_id,
  reporter_id,
  status,
  due_date,
  priority
}) => (
  <tr
    className={
      priority === "highest" ? "danger" : priority === "high" ? "warning" : ""
    }
  >
    <td>{id}</td>
    <td>
      <a href={`/issues/${id}`} target="_blank">{title}</a>
    </td>
    {status === "closed"
      ? <td className="text-success">
          <strong>
            <em>{getStatus(status)}</em>
          </strong>
        </td>
      : <td>{getStatus(status)}</td>}
    <td>{getPriority(priority)}</td>
    {!secondary && <td>{assignee_id}</td>}
    {!secondary && <td>{reporter_id}</td>}
    <td className={isOutdated(due_date) ? "td-alert" : ""}>
      {toLocaleDateString(due_date)}
    </td>
    <td>{toLocaleDateString(meeting_date)}</td>
    <td>{toLocaleDateString(created)}</td>
  </tr>
);

const TableBody = ({ items, secondary }) => (
  <tbody>
    {items.map((item, idx) => (
      <Item secondary={secondary} key={idx} {...item} />
    ))}
  </tbody>
);

export default ({ items, secondary, uniqueKey, isFetching }) => (
  <Panel.Body>
    <Enhanced uniqueKey={uniqueKey}>
      <div className="table-responsive">
        <table className="table table-striped">
          {items.length
            ? [
                <TableHeader secondary={secondary} key="issue-header" />,
                <TableBody
                  secondary={secondary}
                  items={items}
                  key="issue-list"
                />
              ]
            : <NoItems />}
        </table>
      </div>
    </Enhanced>
  </Panel.Body>
);
