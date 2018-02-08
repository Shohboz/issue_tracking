import React from "react";
import { toLocaleDateString } from "redux/helpers";

const Comment = ({ comment, user, created }) => (
  <div>
    <p>
      <strong>{user}</strong> - {toLocaleDateString(created) || "не указано"}
    </p>
    <text>{comment}</text>
    <hr className="hr-text" style={{ marginTop: 0, marginBottom: 10 }} />
  </div>
);

export default ({ items, optionsUsers }) => (
  <div>
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
  </div>
);
