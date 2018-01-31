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
    const { meeting_date, ...res } = data;
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...res,
        meeting_date: (+new Date(meeting_date) / 1000) | 0
      })
    });
  }

  static update(data) {
    const { id, status } = data;
    return fetch(`/api/issues/${id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status })
    });
  }
}
