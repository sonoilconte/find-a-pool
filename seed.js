var db = require("./models");

var poolList =[];

poolList.push({
  name: 'UCSF Bakar Fitness Center',
  address: '1675 Owens St. San Francisco, CA 94158',
  phoneNumber: '415-514-4545',
  contactEmail: 'info@ucsf.edu',
  monday: '8AM - 7PM',
  tuesday: '8AM - 7PM',
  wednesday: '8AM - 7PM',
  thursday: '8AM - 7PM',
  friday: '8AM - 7PM',
  saturday: '10AM - 5PM',
  sunday: '10AM - 5PM',
  special: 'Swim Practice Tuesdays 5:30PM - 7PM'
});

poolList.push({
  name: ' Pomeroy Rec & Rehab Pool',
  address: '207 Skyline Blvd San Francisco, CA 94132',
  phoneNumber: '415-665-4241',
  contactEmail: 'info@prrcsf.org',
  monday: '8AM - 7PM',
  tuesday: '8AM - 7PM',
  wednesday: '8AM - 7PM',
  thursday: '8AM - 7PM',
  friday: '8AM - 7PM',
  saturday: '10AM - 5PM',
  sunday: '10AM - 5PM',
  special: 'Swim Practice Tuesdays 5:30PM - 7PM'
});

poolList.push({
  name: 'Garfield Swimming Pool',
  address: '1271 Treat St San Francisco, CA 94110',
  phoneNumber: '415-695-5001',
  contactEmail: 'info@sfrecpark.org',
  monday: '8AM - 7PM',
  tuesday: '8AM - 7PM',
  wednesday: '8AM - 7PM',
  thursday: '8AM - 7PM',
  friday: '8AM - 7PM',
  saturday: '10AM - 5PM',
  sunday: '10AM - 5PM',
  special: 'Swim Practice Tuesdays 5:30PM - 7PM'
});

poolList.push({
  name: 'Mission Pool',
  address: '101 Linda St San Francisco, CA 94110',
  phoneNumber: '415-641-2841',
  contactEmail: 'info@sfrecpark.org',
  monday: '8AM - 7PM',
  tuesday: '8AM - 7PM',
  wednesday: '8AM - 7PM',
  thursday: '8AM - 7PM',
  friday: '8AM - 7PM',
  saturday: '10AM - 5PM',
  sunday: '10AM - 5PM',
  special: 'Swim Practice Tuesdays 5:30PM - 7PM'
});

// Empty Pools DB & then add seed list pools data via create method. 
db.Pool.remove({}, function(err, pools){

  db.Pool.create(poolList, function(err, pools){
    if (err) { return console.log('ERROR', err); }
    console.log("all pools:", pools);
    console.log("created", pools.length, "pools");
    process.exit();
  });
});