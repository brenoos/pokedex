import React, {Component} from 'react'
import PokeListItem from './pokeListItem'
import axios from 'axios'

const URL_API = 'https://pokeapi.co/api/v2'

class PokeList extends Component{
    constructor(props){
        super(props)
        this.renderRows = this.renderRows.bind(this)
        this.geraLista = this.geraLista.bind(this)
        this.state = {pkmList: []}
    }
    
    componentWillMount(){
        this.geraLista()
    }

    geraLista(){
        axios.get(`${URL_API}/pokemon/?limit=802&offset=0`)
        .then(resp => this.setState({pkmList: resp.data.results}))
    }

    renderRows(){
        const list = this.state.pkmList || []
        return(
            list.map((pkm, index) => (
                <PokeListItem key={index} number={index} name={pkm.name} />
            ))
        )
    }

    render(){
        return(
            <ul className="poke-list" id="pokeList" >
                {this.renderRows()}
            </ul>
        );
    }
}
export default PokeList
