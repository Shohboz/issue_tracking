import fetch from "isomorphic-fetch";

export default class API {
  static get(id = "", name = "") {
    const url = `/api/${name}/${id}/files`;
    return fetch(url, {
      credentials: "include"
    });
  }
}
