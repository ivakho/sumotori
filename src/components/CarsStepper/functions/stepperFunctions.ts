export const toMap = (opts: { value: string; label: string }[]) =>
  new Map(opts.map((o) => [o.value, o.label] as const));

export const idsToLabels = (ids: string[], map: Map<string, string>) =>
  ids.map((id) => map.get(id) ?? id);

const pickRandom = (arr: string[]) => {
  if (!arr.length) return null;
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

export const pickRandomLabel = (
  ids: string[],
  map: Map<string, string>
): string => {
  const id = pickRandom(ids);
  if (!id) return "";
  return map.get(id) ?? id;
};
