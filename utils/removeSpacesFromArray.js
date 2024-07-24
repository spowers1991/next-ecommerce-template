const removeSpacesFromArray = (arr) => {
    
    return arr.map(item => item.replace(/ /g, ''));
}

export default removeSpacesFromArray