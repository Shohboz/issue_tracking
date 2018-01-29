import fetch from "isomorphic-fetch";

export default class API {
  static get(issueID = "") {
    const url = `/api/issues/${issueID}`;
    return fetch(url, {
      credentials: "include"
    });
  }

  static create(data) {
    const url = `/api/issues`;
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  static update(data) {
    const { id, ...res } = data;
    return fetch(`/api/issues/${id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(res)
    });
  }
}
