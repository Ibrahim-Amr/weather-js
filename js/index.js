let countryName = document.getElementById('countryName');
async function getData(country) {
	let myData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4667bab88c9d4a74a21172043232601&q=${country}&days=3`);
	if (myData.ok && myData.status != 400) {
		finalData = await myData.json();
		displayForecast(finalData.forecast.forecastday);
		countryName.innerText = `${finalData.location.name}, ${finalData.location.country}`;
	}
}

// dCurrentWeather(finalData.forecast.forecastday);
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function dCurrentWeather(apiData) {
// 	let todayWeather = `<div class="item row g-0 text-white position-relative mb-4">
// 	<!-- condation -->
// 	<div class="col-md-8 mx-auto">
// 		<div class="row px-3">
// 			<div class="col-md-4 d-flex justify-content-end align-items-center">
// 				<img src="${apiData[0].day.condition.icon}" alt="" />
// 			</div>
// 			<div class="col-md-8 text-start px-5">
// 				<h6 class="text-black">${dayName} ${apiData[0].date}</h6>
// 				<h4>${apiData[0].day.condition.text}</h4>
// 			</div>
// 		</div>
// 	</div>
// 	<!-- temp -->
// 	<div class="col-md-4 d-flex justify-content-start align-items-center mb-4">
// 		<h4>${apiData[0].day.maxtemp_c} <sup>o</sup> / ${apiData[0].day.mintemp_c} <sup>o</sup></h4>
// 	</div>
// 	<div class="row gy-4 gx-1">
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>1:00 AM</span>
// 		<span>${apiData[0].hour[0].temp_c} <sup>o</sup></span>
// 	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>2:00 AM</span>
// 		<span>${apiData[0].hour[1].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>3:00 AM</span>
// 		<span>${apiData[0].hour[2].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>4:00 AM</span>
// 		<span>${apiData[0].hour[3].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>5:00 AM</span>
// 		<span>${apiData[0].hour[4].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>6:00 AM</span>
// 		<span>${apiData[0].hour[5].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>7:00 AM</span>
// 		<span>${apiData[0].hour[6].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>8:00 AM</span>
// 		<span>${apiData[0].hour[7].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>9:00 AM</span>
// 		<span>${apiData[0].hour[8].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>10:00 AM</span>
// 		<span>${apiData[0].hour[9].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>11:00 AM</span>
// 		<span>${apiData[0].hour[10].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>12:00 AM</span>
// 		<span>${apiData[0].hour[11].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>1:00 PM</span>
// 		<span>${apiData[0].hour[12].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>2:00 PM</span>
// 		<span>${apiData[0].hour[13].temp_c} <sup>o</sup></span>	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>3:00 PM</span>
// 		<span>${apiData[0].hour[14].temp_c}<sup>o</sup></span>
// 	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>4:00 PM</span>
// 		<span>${apiData[0].hour[15].temp_c}<sup>o</sup></span>
// 	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 		<span>5:00 PM</span>
// 		<span>${apiData[0].hour[16].temp_c}<sup>o</sup></span>
// 	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 	<span>6:00 PM</span>
// 	<span>${apiData[0].hour[17].temp_c}<sup>o</sup></span>
// 	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 	<span>7:00 PM</span>
// 	<span>${apiData[0].hour[18].temp_c}<sup>o</sup></span>
// 	</div>
// 	<div class="col-md-1 d-flex flex-column">
// 	<span>8:00 PM</span>
// 	<span>${apiData[0].hour[19].temp_c}<sup>o</sup></span>
// </div>
// <div class="col-md-1 d-flex flex-column">
// <span>9:00 PM</span>
// <span>${apiData[0].hour[20].temp_c}<sup>o</sup></span>
// </div>
// <div class="col-md-1 d-flex flex-column">
// <span>10:00 PM</span>
// <span>${apiData[0].hour[21].temp_c}<sup>o</sup></span>
// </div>
// <div class="col-md-1 d-flex flex-column">
// <span>11:00 PM</span>
// <span>${apiData[0].hour[22].temp_c}<sup>o</sup></span>
// </div>
// <div class="col-md-1 d-flex flex-column">
// <span>12:00 PM</span>
// <span>${apiData[0].hour[23].temp_c}<sup>o</sup></span>
// </div>

// </div>
// </div>
// `;
// 	document.getElementById('DataContainer').innerHTML = todayWeather;
// }

async function displayForecast(foreCast) {
	let cartona = ``;
	for (let i = 0; i < foreCast.length; i++) {
		cartona += `
		<div class="item row g-0 text-white position-relative mb-4 ">
						<!-- condation -->
						<div class="col-md-8 mx-auto">
							<div class="row px-3">
								<div class="col-md-4 d-flex  justify-content-center align-items-center flex-column">
								
									<img src="${foreCast[i].day.condition.icon}" alt="" />
								</div>
								<div class="col-md-8 text-start  p-1">
									<h6 class="main-clr">
									${weekday[new Date(foreCast[i].date).getDay()]}
									<span class="text-white">/</span>
									${foreCast[i].date}</h6>
									<h4>${foreCast[i].day.condition.text}</h4>
								</div>
							</div>
						</div>
						<!-- temp -->
						<div class="col-md-4 d-flex justify-content-start align-items-center ">
							<h4>
							<span class="main-clr">H:</span>
							${foreCast[i].day.maxtemp_c} <sup>o</sup> 
							<span class="main-clr">L:</span> 
							${foreCast[i].day.mintemp_c} <sup>o</sup>
							</h4>
						</div>
						<i class="fa-solid fa-caret-down fs-4" id="dayBTN${i + 1}"></i>
						<div class="row gy-4 gx-1 text-white daysInfo d-none" id="day${i + 1}">
						<div class="col-md-1 d-flex flex-column">
							<span>1:00 AM</span>
							<span>${foreCast[i].hour[0].temp_c} <sup>o</sup></span>
						</div>
						<div class="col-md-1 d-flex flex-column">
							<span>2:00 AM</span>
							<span>${foreCast[i].hour[1].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>3:00 AM</span>
							<span>${foreCast[i].hour[2].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>4:00 AM</span>
							<span>${foreCast[i].hour[3].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>5:00 AM</span>
							<span>${foreCast[i].hour[4].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>6:00 AM</span>
							<span>${foreCast[i].hour[5].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>7:00 AM</span>
							<span>${foreCast[i].hour[6].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>8:00 AM</span>
							<span>${foreCast[i].hour[7].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>9:00 AM</span>
							<span>${foreCast[i].hour[8].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>10:00 AM</span>
							<span>${foreCast[i].hour[9].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>11:00 AM</span>
							<span>${foreCast[i].hour[10].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>12:00 AM</span>
							<span>${foreCast[i].hour[11].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>1:00 PM</span>
							<span>${foreCast[i].hour[12].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>2:00 PM</span>
							<span>${foreCast[i].hour[13].temp_c} <sup>o</sup></span>	</div>
						<div class="col-md-1 d-flex flex-column">
							<span>3:00 PM</span>
							<span>${foreCast[i].hour[14].temp_c}<sup>o</sup></span>
						</div>
						<div class="col-md-1 d-flex flex-column">
							<span>4:00 PM</span>
							<span>${foreCast[i].hour[15].temp_c}<sup>o</sup></span>
						</div>
						<div class="col-md-1 d-flex flex-column">
							<span>5:00 PM</span>
							<span>${foreCast[i].hour[16].temp_c}<sup>o</sup></span>
						</div>
						<div class="col-md-1 d-flex flex-column">
						<span>6:00 PM</span>
						<span>${foreCast[i].hour[17].temp_c}<sup>o</sup></span>
						</div>
						<div class="col-md-1 d-flex flex-column">
						<span>7:00 PM</span>
						<span>${foreCast[i].hour[18].temp_c}<sup>o</sup></span>
						</div>
						<div class="col-md-1 d-flex flex-column">
						<span>8:00 PM</span>
						<span>${foreCast[i].hour[19].temp_c}<sup>o</sup></span>
					</div>
					<div class="col-md-1 d-flex flex-column">
					<span>9:00 PM</span>
					<span>${foreCast[i].hour[20].temp_c}<sup>o</sup></span>
					</div>
					<div class="col-md-1 d-flex flex-column">
					<span>10:00 PM</span>
					<span>${foreCast[i].hour[21].temp_c}<sup>o</sup></span>
					</div>
					<div class="col-md-1 d-flex flex-column">
					<span>11:00 PM</span>
					<span>${foreCast[i].hour[22].temp_c}<sup>o</sup></span>
					</div>
					<div class="col-md-1 d-flex flex-column">
					<span>12:00 PM</span>
					<span>${foreCast[i].hour[23].temp_c}<sup>o</sup></span>
					</div>
						
					</div>
					</div>
					
					`;
	}
	document.getElementById('DataContainer').innerHTML = cartona;
	addingEvents();
}

function addingEvents() {
	let btn1 = document.getElementById(`dayBTN1`);
	let btn2 = document.getElementById(`dayBTN2`);
	let btn3 = document.getElementById(`dayBTN3`);
	let day1 = document.getElementById('day1');
	let day2 = document.getElementById('day2');
	let day3 = document.getElementById('day3');

	btn1.addEventListener('click', function () {
		if (day1.classList.contains('d-none')) {
			day1.classList.replace('d-none', 'd-flex');
		} else {
			day1.classList.replace('d-flex', 'd-none');
		}
	});
	// DAY 2
	btn2.addEventListener('click', function () {
		if (day2.classList.contains('d-none')) {
			day2.classList.replace('d-none', 'd-flex');
		} else {
			day2.classList.replace('d-flex', 'd-none');
		}
	});

	// DAY 3
	btn3.addEventListener('click', function () {
		if (day3.classList.contains('d-none')) {
			day3.classList.replace('d-none', 'd-flex');
		} else {
			day3.classList.replace('d-flex', 'd-none');
		}
	});
}
//
getData('cairo');
