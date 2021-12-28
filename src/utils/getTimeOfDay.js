const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours >= 6 && hours < 12) {
    timeOfDay = `morning`;
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = `afternoon`;
  } else if (hours >= 18 && hours < 24) {
    timeOfDay = `evening`;
  } else {
    timeOfDay = `night`;
  }
  return timeOfDay;
};

export default getTimeOfDay;
