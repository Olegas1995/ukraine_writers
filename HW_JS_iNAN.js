function notIsNaN(value) {
    if (typeof value !== 'number' && typeof value !== 'string') {
      return false;
    }
    if (typeof value === 'string') {
      return !isNaN(parseFloat(value));
    }
  
    
    return false;
  }
  
  console.log(notIsNaN('qwerty')); // true
  console.log(notIsNaN('123')); // false
  console.log(notIsNaN(123)); // false
  console.log(notIsNaN(NaN)); // true
  console.log(notIsNaN(undefined)); // false
