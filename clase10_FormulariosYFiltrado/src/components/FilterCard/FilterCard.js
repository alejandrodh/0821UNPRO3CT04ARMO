import React, {Component} from 'react';

class FilterCard extends Component{
    constructor(){
        super();
        this.state = {
            filterBy:''
        }
    }

    evitarDefault(evento){
        evento.preventDefault();
        console.log('evitando envío');
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value
        }, () => this.props.filtrar(this.state.filterBy));
    }

    render(){
        return(
            <form action="" onSubmit={ (milanesa) => this.evitarDefault(milanesa) }>
                <input type="text" onChange={(papasFritas)=> this.controlarCambios(papasFritas) } value={this.state.filterBy} placeholder="Buscar..."/>
            </form>
        )
    }

}

export default FilterCard;