import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const page1List = List(page1);
  const page2List = List(page2);
  const all = page1List.concat(page2List);
  
  return all;
}

export function mergeElements(page1, page2) {
  const page1Obj = Map(page1);
  const page2Obj = Map(page2);
  return page1Obj.merge(page2Obj);
}
