export function getHiddenAddress(address: string) {
    if (address.length <= 10) {
        return {
            first: address, last: null
        };
    }

    const keepCount = 8;
    const first = address.substring(0, keepCount);
    const last = address.substring(address.length - keepCount);

    return {
        first, last
    }
}
