import fetch from "isomorphic-fetch";
import { jsonToQueryString, toUnixTimestamp, getDate } from "redux/helpers";
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
    const { meeting_date, due_date, ...res } = data;
    const dates = filter(Boolean, {
      meeting_date: toUnixTimestamp(meeting_date),
      due_date: toUnixTimestamp(due_date)
    });

    const metadata = JSON.stringify({
      ...res,
      ...dates
    });

    const formData = new FormData();
    formData.append("metadata", metadata);

    return fetch(url, {
      method: "POST",
      credentials: "include",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      body: formData
      // body: JSON.stringify({
      //   metadata: {
      //     ...res,
      //     ...dates
      //   }
      // })
    });
  }

  static search(data) {
    const {
      meeting_date_start,
      created_start,
      created_stop,
      meeting_date_stop,
      ...res
    } = data;

    const dates = filter(Boolean, {
      meeting_date_start: toUnixTimestamp(meeting_date_start),
      created_start: toUnixTimestamp(getDate(-1, created_start)),
      meeting_date_stop: toUnixTimestamp(getDate(1, meeting_date_stop)),
      created_stop: toUnixTimestamp(created_stop)
    });

    const _ = filter(Boolean, {
      ...res,
      ...dates
    });

    const url = `/api/issues${jsonToQueryString(_)}`;
    return fetch(url, {
      credentials: "include"
    });
  }

  static update(data) {
    const { id, ...res } = data;
    return fetch(`/api/issues/${id}`, {
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
