const removeTrailingSpacesFromArray = (arr) => {

    return arr.map(item => item.replace(/\s+$/, ''));

}

export default removeTrailingSpacesFromArray