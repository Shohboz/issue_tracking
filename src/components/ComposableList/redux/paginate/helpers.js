import { is } from "ramda";

export function getVisibleList(list, pager) {
  const { size, current, server } = pager;
  const from = current * size;
  return server ? list : list.slice(from, from + size);
}

export function getPageCount(list = [], size) {
  return Math.ceil((is(Array, list) ? list.length : list) / size);
}

export function getPageList(count = 0, pager) {
  const { paginate, current } = pager;

  let firstPage = current === 0 ? current : current - Math.floor(paginate / 2);
  firstPage = firstPage < 0 ? 0 : firstPage;
  const lastPage = firstPage + paginate;

  return Array.apply(0, Array(count))
    .map((x, idx) => idx)
    .slice(firstPage, lastPage);
}
