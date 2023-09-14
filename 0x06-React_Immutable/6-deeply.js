import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const page1Obj = Map(page1);
  const page2Obj = Map(page2);

  return page1Obj.mergeDeep(page2Obj);
}
