export function getClass(i) {
    if (i % 5 === 0) {
        return 'col-span-1';
    }
    else if (i % 6 === 0) {
        return 'col-span-2 row-span-2'
    }
}