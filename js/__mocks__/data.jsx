
import data from './962930-orig.json';

export function sheetData(id) {
  return new Promise((resolve, reject) => {
    process.nextTick(resolve({body:data}));
  });
}
