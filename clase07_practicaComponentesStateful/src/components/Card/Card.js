/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './card.css';

class Card extends Component{
    constructor(props){
        super(props)
        this.state ={
            text:'ver más',
            viewMore:false,
        }
    }

    viewMore(){
        if(this.state.viewMore){
            //Pasar a false
            this.setState({
                text: 'Ver más',
                viewMore: false,
            })
        } else{
            //Pasarlo a true
            this.setState({
                text: 'Ver menos',
                viewMore:true,
            })
        }
    }


    render(){
        return (
            <div className="character-card">
                <img src={`/assets/images/characters/${this.props.data.img}`} alt="" />
                <h4>{this.props.data.name}</h4>
                <p>Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae molestias? Deleniti vel suscipit voluptatem mollitia vitae. Placeat, incidunt?</p>
                <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Universo: {this.props.data.extra}</p>
                <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
            </div>
        );
    }

}

export default Card