import fetch from "isomorphic-fetch";

export default class API {
  static get(projectID = "") {
    const url = `/api/projects/${projectID}/issues`;
    return fetch(url, {
      credentials: "include"
    });
  }
}
