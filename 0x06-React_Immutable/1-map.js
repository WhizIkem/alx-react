const { Map } = require('immutable');

function getImmutableObject(object) {
  const immutableObject = Map(object);
  return immutableObject;
}

module.exports = { getImmutableObject };