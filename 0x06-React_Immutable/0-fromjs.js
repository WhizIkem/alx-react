const { fromJS } = require('immutable');

function getImmutableObject(object) {
  const immutableObject = fromJS(object);
  return immutableObject;
}

module.exports = { getImmutableObject };