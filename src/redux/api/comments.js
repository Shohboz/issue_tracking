import fetch from "isomorphic-fetch";

export default class API {
  static get(issueID = "") {
    const url = `/api/issues/${issueID}/comments`;
    return fetch(url, {
      credentials: "include"
    });
  }

  static create(data) {
    const { issueID, ...res } = data;
    const url = `/api/issues/${issueID}/comments`;
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(res)
    });
  }
}
