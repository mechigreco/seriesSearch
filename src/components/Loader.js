import axios from 'axios';
import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';

class Loader extends React.Component{

  state={
    results: [] //aqui guardo los resultados para poder pintar en la vista
  }
  sendSearch = (search)=> {
      axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((response)=>{
          console.log(response.data, 'Los datos de respuesta')
          console.log(response.data, 'Los datos que necesito');
          this.setState({results: response.data}) //guardo mi busqueda en el estado
      })
      .catch((error)=>{
          console.log('El error es=', error);
      })
  }

  componentWillMount(){
      console.log('1 Antes de que se ejecute el render');
  }
  componentDidMount(){
      console.log('3 Despues que se ejecuta el render');
  }
  render(){
      console.log('2 Se ejecuta el render, se pinta la pantalla');
      return(
        <div className="App">
            <h1>Buscador</h1>
            <SearchBar emitSearch={this.sendSearch} />
            <div className="grid-cards">
              {
                this.state.results.map(serie =>(
                  
                  <ImageCard key={serie.show.id} identificador={serie.show.name} summary={serie.show.summary} image={
                    serie.show.image
                      ? serie.show.image.medium
                      : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                  }
    />
                  
                ))
              }
            </div>
        </div>
      )
  }
}

export default Loader;


