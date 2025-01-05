let search = document.querySelector('.search');
let city = document.querySelector('.city');
let country = document.querySelector('.country');
let shortDesc = document.querySelector('.short-desc');
let visibility = document.querySelector('.visibility span');
let wind = document.querySelector('.wind span');
let sun = document.querySelector('.sun span');
let value = document.querySelector('.value');
let time = document.querySelector('.time');
let content = document.querySelector('.content');
let body = document.querySelector('body');

async function changeWeatherUI(capitalSearch) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=4ece9b2350a49ce764d84c0f06f7b819`;
    let data = await fetch(apiURL).then((res) => res.json());
    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        let temp = Math.round(data.main.temp - 273.15); // Chuyển thành số nguyên
        value.innerText = temp + '°C';
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        // Hiển thị thời gian từ máy cục bộ
        time.innerText = new Date().toLocaleString('vi');
        
        body.setAttribute('class', 'hot')
        if (temp <= 25) {
            body.setAttribute('class', 'cold')
        }
    } else {
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
})


// Khởi tạo với thành phố 'Hà Nội'
changeWeatherUI('nha trang');