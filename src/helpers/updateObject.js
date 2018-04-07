const updateObject = (key, state, object = {}) => {
  let newObject = Object.assign({}, state[key], object)
  return Object.assign({}, state, {[key]: newObject})
}

export default updateObject