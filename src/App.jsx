import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import movieDestaq from "./components/movieDestaq";
import './App.css'



export default ()=>{

  const [movieList, setMovielist] = useState([]);

  const [dadosDestaque, setDadosDestaque] = useState(null)

  useEffect(()=>{

    const loadAll = async ()=> {
      //Pegando a lista Dos Filmes
      let list = await Tmdb.getHomeList();
      setMovielist(list);


      //Pegando o fimle destaque
      let originais = list.filter(i=>i.slug='originals');
      let rendomChosen = Math.floor(Math.random() * (originais[0].items.results.length));
      let chosen = originais[0].items.results[rendomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');

      console.log(chosenInfo)

    }
    loadAll();
  },[]);

  return(
    <div className="page">

      <section className="Lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key}title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}