import { List } from 'immutable';

export default function getListobject(array) {
  return List(array);
}

export default function addElementToList(list, element) {
  return list.push(element);
}
