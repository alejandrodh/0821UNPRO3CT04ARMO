import React, {Component} from 'react';

class Formulario extends Component{
    constructor(){
        super();
        this.state = {
            valor:''
        }
    }

    evitarDefault(evento){
        evento.preventDefault();
        console.log('evitando envío');
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        }, () => console.log(this.state.valor));
    }

    render(){
        return(
            <form action="" onSubmit={ (milanesa) => this.evitarDefault(milanesa) }>
                <input type="text" onChange={(papasFritas)=> this.controlarCambios(papasFritas) } value={this.state.valor} placeholder="Ingresá tu nombre"/>
                <button type="submit">Enviar</button>
            </form>
        )
    }

}

export default Formulario;