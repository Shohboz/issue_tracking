import fetch from "isomorphic-fetch";

export default class API {
  static get(issueID = "") {
    const url = `/api/issues/${issueID}/files`;
    return fetch(url, {
      credentials: "include"
    });
  }
}
