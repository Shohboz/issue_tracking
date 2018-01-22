import fetch from "isomorphic-fetch";

export default class API {
  static get(departmentID = "", name = "") {
    const url = `/api/departments/${departmentID}/${name}`;
    return fetch(url, {
      credentials: "include"
    });
  }
}
