
import data from './962930-orig.json';

export default function sheetData(id) {
  return new Promise((resolve, reject) => {
    process.nextTick(resolve({body:data}));
  });
}
