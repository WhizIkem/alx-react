import { fromJS }  from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableMap = fromJS(object);
  const value = immutableMap.getIn(array);
  return value;
}