import { map } from "ramda";

export const toRenderList = map(x => ({ value: x.id, label: x.name }));
