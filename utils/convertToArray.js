function convertToArray(variable) {
    if (Array.isArray(variable)) {
        return variable;
    }
    
    if (typeof variable === 'object' && variable !== null) {
        return Object.keys(variable).map(key => ({ [key]: variable[key] }));
    }
    return [variable];
}

export default convertToArray;
