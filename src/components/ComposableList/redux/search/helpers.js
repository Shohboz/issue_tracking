export function getSearchList(list = [], search) {
  const { text, searchBy } = search;
  return list.filter(item =>
    searchBy.some(by =>
      (item[by] + "").toLowerCase().includes(text.toLowerCase())
    )
  );
}
