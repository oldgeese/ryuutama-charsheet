
import data from './962930-orig.json';

export default function getSheetData(id) {
  return new Promise((resolve, reject) => {
    process.nextTick(resolve({body:data}));
  });
}
