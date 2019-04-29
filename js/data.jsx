import request from 'superagent';
import jsonp from 'superagent-jsonp';

const baseUrl = "https://charasheet.vampire-blood.net/";
const postfix = ".json"
const timeout = 10000;
const numIdLength = 7;
const searchBaseUrl = baseUrl + "list_ryutama.json";

export function sheetData(id) {
  const isMD5 = id && id.length > numIdLength;
  if (isMD5) {
    id = 'm' + id;
  }
  return getJsonp(baseUrl + id + postfix);
}

export function search(mode, searchString) {
  return getJsonp(searchBaseUrl, {[mode]: searchString});

}

function getJsonp(url, query) {
  let requested = request.get(url);
  if (query) {
    requested = requested.query(query);
  }
  requested = requested.use(jsonp({timeout: timeout}));

  return requested;
}
