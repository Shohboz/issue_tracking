import fetch from "isomorphic-fetch";

export default class API {
  static get(projectID = "") {
    const url = `/api/projects/${projectID}`;
    return fetch(url, {
      credentials: "include"
    });
  }

  static create(data) {
    const url = `/api/projects`;
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }
}
