// Country: "Azerbaijan"
// CountryCode: "AZ"
// Date: "2020-06-03T00:18:25Z"
// NewConfirmed: 168
// NewDeaths: 5
// NewRecovered: 80
// Slug: "azerbaijan"
// TotalConfirmed: 5662
// TotalDeaths: 68
// TotalRecovered: 3508
//console.log(data.Countries[123].TotalDeaths)
const display_data = (obj) =>{
    let confirm = document.querySelector('#confirmed');
    let recovered = document.querySelector('#recovered');
    let death = document.querySelector('#death');
    let countryDiv = document.querySelector('#country');

    countryDiv.textContent = obj.Countries[123].Country;
    confirm.textContent = obj.Countries[123].TotalConfirmed;
    recovered.textContent = obj.Countries[123].TotalRecovered;
    death.textContent = obj.Countries[123].TotalDeaths;

    create_chart(obj.Countries[123])
    console.log('this worked');
}

// const get_countries = (data) =>{
//     let root = document.querySelector('#root');
//     let selectBox = document.querySelector('#select-country');
//     // let form = document.getElementsByTagName('form');
//     for(let c = 0; c < data.Countries.length; c++){
//         let option = document.createElement('a');
//         option.setAttribute('class', 'dropdown-item');
//         option.setAttribute('href','#');
//         option.textContent = data.Countries[c].Country;
//         selectBox.append(option);
//     }
//     selectBox.setAttribute('class', 'rounded text-bold');
//     root.append(selectBox);
//     let options = document.querySelectorAll('option');
//     Array.from(options).forEach((element, indx) => {
//         element.addEventListener('click', ()=>{
//             // get_countries(data.Countries[indx + 1]);
//             console.log('this worked');
//         });
//     });
    // form.addEventListener('submit', ()=>{

    // });
// }
function create_chart(obj){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['month', 'Total cases', 'Deaths', 'Recovered'],
        ['April', 1200,   40,    103],
        ['May', 8753,   114 ,    1987],
        ['June',  obj.TotalConfirmed, obj.TotalDeaths, obj.TotalRecovered],
        
    ]);

    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
    }
}


function get_data(){
    fetch("https://api.covid19api.com/summary")
    .then(response => {
        return response.json();
    })
    .then(data =>{display_data(data);})
    .catch(err => {
        console.log(err);
    });

}
get_data();