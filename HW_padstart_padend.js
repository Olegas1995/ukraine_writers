
function padEnd(str, symbol, length) {
  if (str.length >= length) {
      return str;
  }
  
  const diff = length - str.length;
  const pad = symbol.repeat(diff);
  
  return str + pad;
}


function padStart(str, symbol, length) {
  if (str.length >= length) {
      return str;
  }
  
  const diff = length - str.length;
  const pad = symbol.repeat(diff);
  
  return pad + str;
}


function pad(str, symbol, length, isStart) {
  if (isStart) {
      return padStart(str, symbol, length);
  } else {
      return padEnd(str, symbol, length);
  }
}
