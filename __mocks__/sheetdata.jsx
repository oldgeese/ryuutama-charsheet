
import data from './962930-orig.json';

const charId = "962930";

export default function getSheetData(id=charId) {
  return new Promise((resolve, reject) => {
    process.nextTick(resolve({body:data}));
  });
}
