import { map, reduce } from "ramda";

export const toRenderList = map(x => ({ value: x.id, label: x.name }));

export const toRenderObject = a =>
  reduce(
    (acc, x) => {
      acc[x.id] = x;
      return acc;
    },
    {},
    a
  );

export const jsonToQueryString = json =>
  "?" +
  Object.keys(json)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(json[key]))
    .join("&");

export const toUnixTimestamp = x => x && (+new Date(x) / 1000) | 0;

export const getDate = d => x => {
  const _ = new Date(x);
  return x && _.setDate(_.getDate() + d);
};
