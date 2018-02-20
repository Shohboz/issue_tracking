import fetch from "isomorphic-fetch";

export default class API {
  static get(projectID = "", name = "") {
    const url = `/api/projects/${projectID}/${name === "project" ? "" : name}`;
    return fetch(url, {
      credentials: "include"
    });
  }
}
