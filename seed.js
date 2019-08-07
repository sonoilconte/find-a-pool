// For the convenience of easy seeding, lat and lng here do not match actual address
// TODO: including the geocoding step in the seeding 

const db = require('./models');

const poolList = [];

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
  map: 'https://www.google.com/maps/place/Bakar+Fitness+%26+Recreation+Center+at+UCSF+Mission+Bay/@37.7682497,-122.3954389,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7fcef9a8173f:0x1d557fc43e915386!8m2!3d37.7682497!4d-122.3932502',
  maps: {
    lat: 37.7594696,
    long: -122.4248613,
  },
  tags: ['Adult Swim', 'Lap Swim', 'Swim Team', 'Swim lessons'],
  imageURL: 'images/ucsf_pool.jpg',
});

poolList.push({
  name: 'Pomeroy Rec & Rehab Pool',
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
  map: 'https://www.google.com/maps/place/Pomeroy+Recreation+%26+Rehabilitation+Center/@37.7300593,-122.5039161,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7d725580bfe1:0xcc686f35d12e9a9d!8m2!3d37.7300624!4d-122.5014317',
  maps: {
    lat: 37.7594696,
    long: -122.4248613,
  },
  special: 'Swim Practice Tuesdays 5:30PM - 7PM',
  tags: ['Adult Swim'],
  imageURL: 'images/pomeroy_pool.jpg',
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
  map: 'https://google.com/maps/place/Garfield+Pool/@37.7500704,-122.4141837,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e4f57d753cd:0x961382f699804bc6!8m2!3d37.7500704!4d-122.411995',
  maps: {
    lat: 37.7594696,
    long: -122.4248613,
  },
  special: 'Swim Practice Tuesdays 5:30PM - 7PM',
  tags: ['Adult Swim', 'Lap Swim'],
  imageURL: 'images/garfield_pool.jpg',
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
  map: 'https://www.google.com/maps/place/Mission+Pool/@37.7594696,-122.424856,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e22b49293c9:0x4220f652e9211f5f!8m2!3d37.7594696!4d-122.4226673',
  maps: {
    lat: 37.7594696,
    long: -122.4248613,
  },
  special: 'Swim Practice Tuesdays 5:30PM - 7PM',
  tags: ['Adult Swim', 'Swim Team'],
  imageURL: 'images/mission_pool.jpg',
});


const eventList = [
  {
    dayOfWeek: 'Monday',
    title: 'Swim Team Practice',
    description: '',
    startTime: '7AM',
    endTime: '8AM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Monday',
    title: 'Lap Swim Only',
    description: '',
    startTime: '9AM',
    endTime: '11AM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Monday',
    title: 'Masters Club',
    description: '',
    startTime: '5PM',
    endTime: '6PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Tuesday',
    title: 'Swim Team Practice',
    description: '',
    startTime: '8AM',
    endTime: '9AM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Tuesday',
    title: 'Lap Swim Only',
    description: '',
    startTime: '9AM',
    endTime: '12PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Tuesday',
    title: 'Family Swim',
    description: '',
    startTime: '3PM',
    endTime: '5PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Wednesday',
    title: 'Swim Team Practice',
    description: '',
    startTime: '7AM',
    endTime: '8AM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Wednesday',
    title: 'Lap Swim Only',
    description: '',
    startTime: '9AM',
    endTime: '11AM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Wednesday',
    title: 'Masters Club Practice',
    description: '',
    startTime: '5PM',
    endTime: '6PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Thursday',
    title: 'Swim Team Practice',
    description: '',
    startTime: '8AM',
    endTime: '9AM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Thursday',
    title: 'Lap Swim Only',
    description: '',
    startTime: '9AM',
    endTime: '12PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Thursday',
    title: 'Family Swim',
    description: '',
    startTime: '3PM',
    endTime: '5PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Friday',
    title: 'Swim Team Practice',
    description: '',
    startTime: '7AM',
    endTime: '8AM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Friday',
    title: 'Lap Swim Only',
    description: '',
    startTime: '9AM',
    endTime: '11AM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Friday',
    title: 'Masters Club Practice',
    description: '',
    startTime: '5PM',
    endTime: '6PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Saturday',
    title: 'Family Swim',
    description: '',
    startTime: '9AM',
    endTime: '5PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Saturday',
    title: 'Lap Swim (3 lanes)',
    description: '',
    startTime: '9AM',
    endTime: '5PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Sunday',
    title: 'Family Swim',
    description: '',
    startTime: '9AM',
    endTime: '5PM',
    isRecurring: true,
  },
  {
    dayOfWeek: 'Sunday',
    title: 'Lap Swim (3 lanes)',
    description: '',
    startTime: '9AM',
    endTime: '5PM',
    isRecurring: true,
  },
];

const poolsWithEvents = [];
poolList.forEach((pool) => {
  const poolWithEvents = pool;
  poolWithEvents.events = eventList;
  poolsWithEvents.push(poolWithEvents);
});

db.Pool.remove({})
  .then((commandResult) => {
    console.log(`Removed ${commandResult.result.n} pools`);
    return db.Pool.create(poolsWithEvents);
  })
  .then((pools) => {
    console.log('Created ', { pools });
    console.log(`Created ${pools.length} pools`);
    process.exit();
  })
  .catch((err) => {
    console.log('Error seeding pools', err);
    process.exit();
  });
