import { List } from 'immutable';

export function getListobject(array) {
  return (List(array));
}

export function addElementToList(list, element) {
  return list.push(element);
}
