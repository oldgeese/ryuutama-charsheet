// @flow
import request from 'superagent';
import jsonp from 'superagent-jsonp';

const baseUrl: string = "https://pure-anchorage-83238.herokuapp.com/";
const postfix: string = ".json"
const timeout: number = 10000;
const numIdLength: number = 7;
const searchBaseUrl: string = "https://pure-anchorage-83238.herokuapp.com/list_ryutama.json";

type QueryObject = {
  [mode: string]: string
}

export function sheetData(id: string) {
  const isMD5: boolean|string = id && id.length > numIdLength;
  if (isMD5) {
    id = 'm' + id;
  }
  return getJsonp(baseUrl + id + postfix);
}

export function search(mode:string, searchString: string) {
  return getJsonp(searchBaseUrl, {[mode]: searchString});
}

function getJsonp(url: string, query?: QueryObject) {
  let requested = request.get(url);
  if (query) {
    requested = requested.query(query);
  }
  requested = requested.use(jsonp({timeout: timeout}));

  return requested;
}
