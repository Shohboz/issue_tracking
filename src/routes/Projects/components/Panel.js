import React from "react";
import List from "./List";

export default ({ items }) => (
  <div className="panel panel-default">
    <div className="panel-heading">Список проектов</div>
    <List items={items} />
  </div>
);
