const KEY = "797998a7ce0f3895779eaea794429612";
const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;

  const raq = await fetch(base + query);
  const data = await raq.json();

  return data;
};

getData("London").then((data) => console.log(data));
