import fetch from "isomorphic-fetch";

export default class API {
  static get(departmentID = "") {
    const url = `/api/departments/${departmentID}`;
    return fetch(url, {
      credentials: "include"
    });
  }

  static create(data) {
    const url = `/api/departments`;
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
