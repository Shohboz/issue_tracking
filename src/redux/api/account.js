import fetch from "isomorphic-fetch";

export default class API {
  static get() {
    const url = "/api/myself";
    return fetch(url, {
      credentials: "include"
    });
  }
}
