// Code your solution in this file!
function logDriverNames(drivers) {
   drivers.forEach(function(driver) {
     console.log(driver.name)
   })
}

function logDriversByHometown(drivers, location) {
  const matches = drivers.filter(function(driver) {
    return driver.hometown === location;
  })
  matches.forEach(function(match) {
    console.log(match.name)
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  })
}

const totalRevenue = function(drivers) {
  let total = 0;

  drivers.forEach(function(driver) {
    total += driver.revenue;
  });

  return total
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers)/drivers.length
}
