// Implementation for analyzeArray function
function analyzeArray(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
      average: avg,
      min: min,
      max: max,
      length: arr.length,
    };
  };

  module.exports = analyzeArray