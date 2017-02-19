// @flow
import request from 'superagent';
import jsonp from 'superagent-jsonp';

const baseUrl: string = "https://pure-anchorage-83238.herokuapp.com/";
const postfix: string = ".json"
const timeout: number = 10000;
const numIdLength: number = 6;
const searchBaseUrl: string = "http://charasheet.vampire-blood.net/list_ryutama.json";

export function sheetData(id: string) {
  const isMD5: boolean|string = id && id.length > numIdLength;
  if (isMD5) {
    id = 'm' + id;
  }
  return getJsonp(baseUrl + id + postfix);
}

export function searchTag(searchString: string) {
  return getJsonp(searchBaseUrl, {tag: searchString});
}

function getJsonp(url: string, query?: object, timeout?: number=timeout) {
  let request = request.get(url);
  if (query) {
    request = request.query(query);
  }
  request = request.use(jsonp({timeout: timeout}));

  return request;
}
