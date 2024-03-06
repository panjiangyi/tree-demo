export function getHiddenAddress(address: string) {
  const keepCount = 8;
  if (address.length <= keepCount*2) {
    return {
      first: address,
      last: null,
    };
  }

  const first = address.substring(0, keepCount);
  const last = address.substring(address.length - keepCount);

  return {
    first,
    last,
  };
}
