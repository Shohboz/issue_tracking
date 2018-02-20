import fetch from "isomorphic-fetch";

export default class API {
  static get(projectID = "", isArchived) {
    const url = `/api/projects${projectID ? `/${projectID}` : ""}${isArchived ? "?archived=true" : ""}`;
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

  static update(data) {
    const { id, created, ...res } = data;
    return fetch(`/api/projects/${id}`, {
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
