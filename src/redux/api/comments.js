import fetch from "isomorphic-fetch";

export default class API {
  static get(issueID = "") {
    const url = `/api/issues/${issueID}/comments?with=files`;
    return fetch(url, {
      credentials: "include"
    });
  }

  static create(data) {
    const { issueID, files, ...res } = data;
    const url = `/api/issues/${issueID}/comments`;

    const metadata = JSON.stringify({
      ...res
    });

    const formData = new FormData();
    formData.append("metadata", metadata);
    (files || []).map(file => formData.append(file.name || "0.jpg", file));

    return fetch(url, {
      method: "POST",
      credentials: "include",
      body: formData
    });
  }
}
