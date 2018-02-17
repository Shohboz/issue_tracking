import { map, reduce, curry, prop, find, propEq, compose } from "ramda";
import { optionsStatus, optionsPriority } from "./fixtures";

export const toRenderList = map(x => ({ value: x.id, label: x.name }));

export const toRenderObject = prop => a =>
  reduce(
    (acc, x) => {
      acc[x[prop]] = x;
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

const timestamp = x => (+new Date(x) / 1000) | 0;

export const toUnixTimestamp = x => x && timestamp(x);

export const todayTimestamp = timestamp(new Date());

export const isOutdated = x =>
  x > todayTimestamp && x - todayTimestamp <= 172800;

export const getDate = curry((d, x) => {
  const _ = new Date(x);
  return x && _.setDate(_.getDate() + d);
});

export const toLocaleDateString = x =>
  (x && new Date(x * 1000).toLocaleDateString()) || "-";

const getVal = x => compose(prop("label"), find(propEq("value", x)));

export const getStatus = x => getVal(x)(optionsStatus);
export const getPriority = x => getVal(x)(optionsPriority);
