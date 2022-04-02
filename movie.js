//API
const API_KEY = 'api_key=5a21c7e33fd419b270df295a1b95435d&page=1';
const BASE_URL  = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

var main = document.querySelectorAll('.main .center')[0];

fetch(API_URL)
.then(response=> response.json())
.then(data=> {
    data.results.map((i,j)=>{

        if(j > 17)
            return
        if(j == 0){
            main.innerHTML+=`
            
                <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"</div>
            
            `
        }else{
            if(j == 1){
                main.innerHTML+=`
                <h2>Assista o melhor filme</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                `
            }else{
                main.innerHTML+=`
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                `
            }
        }
    })
})
fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5a21c7e33fd419b270df295a1b95435d&page=2')
.then(response=> response.json())
.then(data=> {
    data.results.map((i,j)=>{

        if(j > 18)
            return
        if(j == 0){
            main.innerHTML+=`
              
  
            `
        }else{
            if(j == 1){
                main.innerHTML+=`
            
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                `
            }else{
                main.innerHTML+=`
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                `
            }
        }
    })
})
