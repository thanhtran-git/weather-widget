// import { useState, useEffect } from "react";
// import React from "react";       
// import WeatherIcon from "./WeatherIcon.jsx";                              

//                                             /* Fetching data from API */
// export default function FetchWeatherData() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const apiUrl = "https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=433,10384"

//     useEffect(() => {
//       const getData = async () => {
//         try {
//           const response = await fetch(apiUrl)
//           if (!response.ok) {
//             throw new Error(
//               `HTTP error. Status: ${response.status}`
//             );
//           }
//           let weatherData = await response.json();
//           setData(weatherData)
//           console.log(weatherData);
//           setError(null);

//         } catch(err) {
//           setError(err.message);
//           setData(null);
//         } finally {
//           setLoading(false);
//         }
//       }
//       getData()
//     }, [])

// // ------------------------------------------------------------------------------
//                                           /* determining current date and next ones */
//                                           const today = new Date();
// const currentHour = today.getHours()
// const todaysDate = new Date(data["10384"]?.forecast1?.start)
// // console.log(todaysDate.toLocaleDateString('de-de'))

// const weekDay = ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."]
// const date1 = new Date(data["10384"]?.days[1]?.dayDate);
// const forecastNextDay = weekDay[date1.getDay()]
// const date2 = new Date(data["10384"]?.days[2]?.dayDate)
// const forecastNextDay2 = weekDay[date2.getDay()]

//                                                  /* Displaying the Data */
// return (
//   <>
//     {loading && <div>Loading...</div>}
//     {error && (
//       <h1>{`Fehler beim Laden von Daten. Error fetching data - ${error}`}</h1>
//     )}
//       <div className="widget-container">
//                                                 {/* "WETTER | BERLIN" HEADER */}
//         <div className="weather-header">
//             <span className="title">Wetter</span> <span className="weather-location">Berlin   </span>
//             <span className="todaysDate">{todaysDate.toLocaleDateString('de-de')}</span>
            
//           </div>
//              {data && (
              
//                     <div className="weather-bottom">   
//                                                 {/* Weather Icon + TempNow Container*/}
//                         <div className="weather-now">
//                                                 {/* Weather Icon component */}
//                           {WeatherIcon()}

//                           <span className="weather-now-temp">
//                             {Math.round(data["10384"]?.forecast1?.temperature[currentHour]/10)}°
                            
//                           </span>
//                         </div>                       
//                     <div className="weather-next">

//                                                  {/* Forecast Next Day Container */}
//                         <div className="weather-next-item">
//                               <span className="weather-next-date">{forecastNextDay}</span>

//                               <span className="weather-next-temp tempMax">
//                                 {Math.round(data["10384"]?.days[1]?.temperatureMax/10)}°
//                                 </span> /{' '}

//                               <span className="weather-next-temp tempMin">
//                                 {Math.round(data["10384"]?.days[1]?.temperatureMin/10)}°</span>
//                           </div>
                           
//                                                 {/* Forecast Second Next Day Container */}
//                             <div className="weather-next-item">
//                                   <span className="weather-next-date">{forecastNextDay2}</span>

//                                   <span className="weather-next-temp tempMax">
//                                     {Math.round(data["10384"]?.days[2]?.temperatureMax/10)}°
//                                     </span> /{' '}
//                                   <span className="weather-next-temp tempMin">
//                                     {Math.round(data["10384"]?.days[2]?.temperatureMin/10)}°</span>
//                              </div>
//                       </div>
//                     </div>
//                     )} 
//         </div> 
           
//     </>    
// )
// }