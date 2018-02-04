import fetch from "isomorphic-fetch";
import { jsonToQueryString, toUnixTimestamp } from "redux/helpers";
import { filter } from "ramda";

export default class API {
  static get(issueID = "") {
    const url = `/api/issues/${issueID}`;
    return fetch(url, {
      credentials: "include"
    });
  }

  static create(data) {
    const url = `/api/issues`;
    const { meeting_date, ...res } = data;
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...res,
        meeting_date: (+new Date(meeting_date) / 1000) | 0
      })
    });
  }

  static search(data) {
    const { meeting_date_start, created_start, ...res } = data;
    const dates = filter(Boolean, {
      meeting_date_start: toUnixTimestamp(meeting_date_start),
      created_start: toUnixTimestamp(created_start)
    });

    const url = `/api/issues${jsonToQueryString({
      ...res,
      ...dates
    })}`;
    return fetch(url, {
      credentials: "include"
    });
  }

  static update(data) {
    const { id, status } = data;
    return fetch(`/api/issues/${id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status })
    });
  }
}
