//API
const API_KEY = 'api_key=5a21c7e33fd419b270df295a1b95435d';
const BASE_URL  = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

var main = document.querySelectorAll('.main .center')[0];

fetch(API_URL)
.then(response=> response.json())
.then(data=> {
    data.results.map((i,j)=>{

        if(j > 10)
            return
        if(j == 0){
            main.innerHTML+=`
            
                <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"</div>
            
            `
        }
    })
})
