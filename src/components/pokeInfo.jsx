import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { consultaPokemon } from '../actions/pkmActions'

class PokeInfo extends Component {
    constructor(props){
        super(props)
    }

    
    componentWillMount() {
        this.props.consultaPokemon(this.props.match.params.pokeNumber)
    }
    

    render(){
        return(
            <div>
                <Link to="/" className="back-button"> &lt; </Link>

                <div className="poke-profile" >
                    {/* <div>#{pkm.number} - {pkm.name}</div> */}
                    <img className="poke-sprite" src={`https://serebii.net/sunmoon/pokemon/${this.props.match.params.pokeNumber}.png`} />
                </div>

                <ul className="poke-types" >

                                <li  >
                                    <img src={`https://serebii.net/pokedex-bw/type/normal.gif`} />
                                </li>

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
                            {/* <td>{pkm.info.attack}</td>
                            <td>{pkm.info.defense}</td>
                            <td>{pkm.info.sp_atk}</td>
                            <td>{pkm.info.sp_def}</td>
                            <td>{pkm.info.speed}</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = state => ({pkm: state.pkm.pkm, pkmList: state.pkm.pkmList})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ consultaPokemon }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PokeInfo)