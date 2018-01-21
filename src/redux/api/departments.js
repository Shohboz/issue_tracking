import fetch from "isomorphic-fetch";

export default class API {
  static get(departmentID = "") {
    const url = `/api/departments/${departmentID}`;
    return fetch(url, {
      credentials: "include"
    });
  }
}
