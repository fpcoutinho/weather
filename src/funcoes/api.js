async function getData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=6114bfb8a14348b0a38113643232004&q=${location}&aqi=yes`
  );
  const data = await response.json();
  return data;
}

export { getData };
