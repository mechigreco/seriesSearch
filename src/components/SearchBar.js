import React from "react";

class SearchBar extends React.Component {
    state = {
        search: '', //empieza en vacio
    }

    render(){
        return(
            <div className="search-bar">
                <input className="search-input" placeholder="Ingrese una palabra" name="search" 
                onChange={(event)=>{
                   // console.log(event.target.value);
                    this.setState({search: event.target.value})
                }} />

                <button className="search-button" onClick={()=>{this.props.emitSearch(this.state.search)}}>Buscar</button>
            </div>
        )
    }
}

export default SearchBar;