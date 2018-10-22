function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toUpperCase() === name.toUpperCase()
  })
}

function fuzzyMatch(drivers, string) {
  let lengthOfName = string.length
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === string
  })
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}
