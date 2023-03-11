export function isEmpty(obj?): Boolean {
    if(obj == undefined) return true
    return Object.keys(obj).length === 0;
}
