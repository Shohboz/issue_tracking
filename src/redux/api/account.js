import fetch from "isomorphic-fetch";

export default class API {
  static get() {
    const url = "/api/myself";
    return fetch(url, {
      credentials: "include"
    });
  }

  static update(data) {
    const { id, ...res } = data;
    return fetch(`/api/myself`, {
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
