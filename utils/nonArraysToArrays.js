const nonArraysToArrays = (arr) => {
    // Check if input is an array
    if (Array.isArray(arr)) {
        console.log('Is an array')
      return arr
    } else {
        console.log('Not an array')
      return [arr]
    }
  };
  
  export default nonArraysToArrays;
  