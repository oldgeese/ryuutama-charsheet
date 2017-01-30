import request from 'superagent';
import jsonp from 'superagent-jsonp';

const baseUrl = "https://pure-anchorage-83238.herokuapp.com/";
const charId = "962930";
const postfix = ".json"
const timeout = 10000;

export default function getSheetData(id=charId) {
  return request.get(baseUrl + id + postfix).use(jsonp({timeout: timeout}))
}