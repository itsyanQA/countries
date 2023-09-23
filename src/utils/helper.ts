export function accessFirstObjKey(object: { string: string }) {
  if (isObject(object)) {
    return Object.keys(object)?.[0];
  }
}

function isObject(item: any): boolean {
  return typeof item === "object" && !Array.isArray(item) && item !== null;
}
