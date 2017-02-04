import request from 'superagent';
import jsonp from 'superagent-jsonp';

const baseUrl = "https://pure-anchorage-83238.herokuapp.com/";
const postfix = ".json"
const timeout = 10000;
const numIdLength = 6;

export default function getSheetData(id) {
  const isMD5 = id && id.length > numIdLength;
  if (isMD5) {
    id = 'm' + id;
  }
  return request.get(baseUrl + id + postfix).use(jsonp({timeout: timeout}))
}
