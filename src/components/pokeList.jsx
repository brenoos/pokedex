import React, {Component} from 'react'
import PokeListItem from './pokeListItem'
import axios from 'axios'
import Loading from 'react-loading'

const _ = require('lodash')

const URL_API = 'https://pokeapi.co/api/v2'

class PokeList extends Component{
    constructor(props){
        super(props)
        this.renderRows = this.renderRows.bind(this)
        this.geraLista = this.geraLista.bind(this)
        // this.keyHandler = this.keyHandler.bind(this)
        this.change = this.change.bind(this)
        this.state = {
            pkmList: [],
            filter: '',
            loading: true    
        }
    }
    
    componentWillMount(){
        this.geraLista()
    }

    // componentDidMount(){
    //  this.setState({loading: false})
    // }

    // keyHandler(e){
    //     if(e.key === 'Enter'){
    //         console.log("enter")
    //         // this.setState({filter: e.target.value})
    //     }
    // }

    change(e){
        this.setState({filter: e.target.value})
    }

    geraLista(){
        axios.get(`${URL_API}/pokemon/?limit=802&offset=0`)
        .then(resp => {
            var list = []
            _.forEach(resp.data.results, (obj, index) => {
                obj.number = index
                index++
                list.push(obj)
            })

            this.setState({pkmList: list, loading: false})
        })
    }

    renderRows(){
        const list = this.state.pkmList || []
        var filtro = _.filter(list, pkm => {
            return !_.isEmpty(this.state.filter) ? pkm.name.indexOf(_.toLower(this.state.filter)) > -1 : true
        })
        return(
            filtro.map((pkm) => (
                <PokeListItem key={pkm.number} number={pkm.number} name={pkm.name} />
            ))
        )
    }

    render(){
        return(
           <div>
                <input type="text" id="pokeFilter" placeholder="Buscar"
                    onChange={this.change} />
                <ul className="poke-list" id="pokeList" >
                    { this.state.loading ? <Loading id="loading" type="bars" color="#000000" /> : this.renderRows() }
                </ul>   
            </div> 
        )
    }
}
export default PokeList
