export async function getTemp() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=25.53&lon=77.72&appid=${process.env.OPEN_WEATHER}`
  );

  const data = await res.json();
  
  return Math.floor(data.main.temp - 273.3);
}

