import React, {Component} from 'react'
import { connect } from 'react-redux'
import PokeListItem from './pokeListItem'
import { bindActionCreators } from 'redux'
import { geraLista } from '../actions/pkmActions'

class PokeList extends Component{
    constructor(props){
        super(props)
        this.renderRows = this.renderRows.bind(this)
    }
    
    componentWillMount(){
     this.props.geraLista()
    }

    renderRows(){
        const list = this.props.pkmList || []
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
const mapStateToProps = state => ({pkmList: state.pkm.pkmList})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ geraLista }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PokeList)
