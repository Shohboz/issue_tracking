import fetch from "isomorphic-fetch";

export default class API {
  static get() {
    const url = `/api/presets`;
    return fetch(url, {
      credentials: "include"
    });
  }
}
