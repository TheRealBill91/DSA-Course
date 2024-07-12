export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else if (needle > v) {
            lo = lo + 1;
        }
    } while (lo < hi);

    return false;
}

bs_list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
