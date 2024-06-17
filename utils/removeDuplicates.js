export function removeDuplicates(arr) {
    const seen = new Set();
    return arr.filter(item => {
        if (!seen.has(item.id)) {
            seen.add(item.id);
            return true;
        }
        return false;
    });
}
