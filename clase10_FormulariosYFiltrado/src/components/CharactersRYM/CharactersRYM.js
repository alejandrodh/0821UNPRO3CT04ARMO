import React, {Component} from 'react';
import CardRYM from '../CardRYM/CardRYM'
import FilterCard from '../FilterCard/FilterCard';

class CharactersRYM extends Component{
    constructor(){
        super();
        this.state = {
            personajes:[],
            personajesIniciales: [],
            isLoaded: false,
            nextUrl: '',            
        }
    }

    componentDidMount(){
        //console.log("me monté");
        let url = 'https://rickandmortyapi.com/api/character';
        fetch(url)
            .then( response => response.json())
            .then( data => {
                console.log(data);
                this.setState({
                    personajes: data.results,
                    personajesIniciales: data.results,
                    isLoaded: true,
                    nextUrl:data.info.next,
                })
            })
            .catch( e => console.log(e))
    }

    addMore(){  
        //ir a buscar a la API
        let url = this.state.nextUrl
        fetch(url)
            .then( response => response.json())
            .then( data => {
                console.log(data);
                
                this.setState({
                    nextUrl: data.info.next,
                    //Sumarlos al array 
                    personajes: this.state.personajes.concat(data.results),
                    personajesIniciales: this.state.personajesIniciales.concat(data.results)
                })
            })
            .catch( e => console.log(e))

        
    }

    deleteCard(personajeABorrar){
        let personajesQueQuedan = this.state.personajes.filter( personaje => personaje.id !== personajeABorrar)
        
        this.setState({
            personajes: personajesQueQuedan
        })
    }

    filtrarPersonajes(textoAFiltrar){
        //Un filtro que deje solo las tarjetas en donde el texto esté incluido en el nombre del presonaje.
        let personajesFiltrados = this.state.personajesIniciales.filter( personaje => personaje.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))

        this.setState({
            personajes: personajesFiltrados,
        })

    }

    render(){
         //console.log('Me rendericé');
         //console.log(this.state.personjes);
        return(
            <React.Fragment>
                <div className="row card-container">
                    <FilterCard filtrar={(texto)=>this.filtrarPersonajes(texto) }/>
                </div>
                <div className="row card-container">
                { 
                    this.state.isLoaded === false ?
                    <p>Cargando...</p> :
                    this.state.personajes.map( (personaje, idx) => <CardRYM key={personaje.name + idx} dataPersonaje={personaje} remove={(id)=>this.deleteCard(id)}/>)
                }
                </div>
                <button onClick={ ()=>this.addMore()}>Más personajes</button>
            </React.Fragment>
        )
    }
}

export default CharactersRYM;