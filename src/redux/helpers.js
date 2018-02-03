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
