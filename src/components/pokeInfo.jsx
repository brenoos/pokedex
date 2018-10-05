import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Loading from 'react-loading'

const _ = require('lodash')
const URL_API = 'https://pokeapi.co/api/v2'


class PokeInfo extends Component {  
    constructor(props){
        super(props)
        this.consultaPokemon = this.consultaPokemon.bind(this)
        this.renderTypes = this.renderTypes.bind(this)
        this.state = {
            number: this.props.match.params.pokeNumber,
            pkm: {},
            speed: 0,
            spDef: 0,
            spAtk: 0,
            def: 0,
            atk: 0,
            types: [],
            loading: true
        }
    }  

    componentWillMount() {
        this.consultaPokemon(_.toNumber(this.props.match.params.pokeNumber))
    }

    consultaPokemon(number){
        axios.get(`${URL_API}/pokemon/${number}/`)
            .then(resp => this.setState(
                {
                    pkm: resp.data, 
                    speed: resp.data.stats[0].base_stat,
                    spDef: resp.data.stats[1].base_stat,
                    spAtk: resp.data.stats[2].base_stat,
                    def: resp.data.stats[3].base_stat,
                    atk: resp.data.stats[4].base_stat,
                    types: resp.data.types,
                    loading: false
                }
            ))
    }
    
    renderTypes(){        
        {
            const types = this.state.types
            return(
                types.map(type => {
                    return(
                        <li key={type.type.name} >
                            <img src={`https://serebii.net/pokedex-bw/type/${type.type.name}.gif`} alt="foto type" />
                        </li>
                    )
                })                  
            )        
        }
    }
    
    render(){
        let template
        
        if(this.state.loading){
            template = <Loading id="loading" type="bars" color="#000000" />
        }else{
            template = 
            <div>
                <Link to="/" className="back-button"> &lt; </Link>

                <div className="poke-profile" >
                    <div>#{this.state.number} - {_.upperFirst(this.state.pkm.name)}</div>
                    <img className="poke-sprite" src={`https://serebii.net/sunmoon/pokemon/${this.props.match.params.pokeNumber}.png`} alt="sprite poke"/>
                </div>

                <ul className="poke-types" >
                    {this.renderTypes()}
                </ul>

                <table className="stats" >
                    <tbody>
                        <tr>
                            <td>Attack</td>
                            <td>Defense</td>
                            <td>Sp Atk</td>
                            <td>Sp Def</td>
                            <td>Speed</td>
                        </tr>
                        <tr>
                            <td>{this.state.atk}</td>
                            <td>{this.state.def}</td>
                            <td>{this.state.spAtk}</td>
                            <td>{this.state.spDef}</td>
                            <td>{this.state.speed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        }


        return(
            template
        )
    }
}
export default PokeInfo