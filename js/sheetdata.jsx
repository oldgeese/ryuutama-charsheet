// @flow
import request from 'superagent';
import jsonp from 'superagent-jsonp';

const baseUrl: string = "https://pure-anchorage-83238.herokuapp.com/";
const postfix: string = ".json"
const timeout: number = 10000;
const numIdLength: number = 6;

export default function getSheetData(id: string) {
  const isMD5: boolean|string = id && id.length > numIdLength;
  if (isMD5) {
    id = 'm' + id;
  }
  return request.get(baseUrl + id + postfix).use(jsonp({timeout: timeout}));
}
