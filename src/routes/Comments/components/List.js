import React, { Fragment } from "react";
import { toLocaleDateString } from "redux/helpers";

const File = ({ filename, path }) => (
  <li>
    <small>
      <span alt={path}>{filename}</span>
    </small>
  </li>
);

const Comment = ({ comment, user, created, uploads, files }) => (
  <Fragment>
    <p>
      <strong>{user}</strong> - {toLocaleDateString(created) || "не указано"}
    </p>
    <text>{comment}</text>
    {uploads && (
      <blockquote style={{ marginTop: 10, marginBottom: 5 }}>
        <ul className="list-unstyled">
          {files.map((file, idx) => <File key={idx} {...file} />)}
        </ul>
      </blockquote>
    )}

    <hr className="hr-text" style={{ marginTop: 0, marginBottom: 10 }} />
  </Fragment>
);

export default ({ items, optionsUsers }) => (
  <Fragment>
    {items.map(x => (
      <Comment
        key={x.id}
        user={
          (optionsUsers[x.user_id] && optionsUsers[x.user_id].name) ||
          "неизвестный"
        }
        id={x.id}
        {...x}
      />
    ))}
  </Fragment>
);
