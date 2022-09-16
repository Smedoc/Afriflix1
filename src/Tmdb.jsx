const API_KEY = 'd8b3ee08849d35c18125dc5b751c2956';
const API_BASE = 'https://api.themoviedb.org/3';

/*
    -ORRIGINAIS NETFLIX
    -RECOMENDADOS
    -EM ALTA
    -ACÇÃO
    -COMEDIA-
    -TERROR
    -ROMANCE

*/

//PEGANDO OS DADOS DA API

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default{

    getHomeList: async ()=>{
        return [
            {
                slug: 'originals',
                title: 'Originais do Netlix',
                items: await basicFetch(`/discover/tv?wit_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para voçê',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=37&language=pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Romence',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt_BR&api_key=${API_KEY}`)
            }
        ]
    },

    getMovieInfo: async (movieId, type) =>{
        let info = {}
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`movie/${movieId}?language=pt-BR&api:key${API_KEY}`)
                break; 
                
                case 'tv':
                    info = await basicFetch(`tv/${movieId}?language=pt-BR&api:key${API_KEY}`)
                break;

                default:
                    info = null
                break;
            }
        }


        return info;
    } 

}