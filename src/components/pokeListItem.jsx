import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class PokeListItem extends Component  {
    constructor(props) {
        super(props)
        this.state = {number: props.number + 1}
    }

    componentWillMount() {
        this.acrescentaZero()
    }

    acrescentaZero() {
            var number = this.state.number.toString()
            switch (number.length){
                case 1:
                    this.setState({number: "00"+this.state.number})
                break
                case 2:
                    this.setState({number: "0"+this.state.number})
                break
                default:
                    this.setState({number: this.state.number})
                break
            }

    }

    render(){    
        return(
                <Link to={`/${this.state.number}`} >
                    <li className="poke-list-item" >
                        <img src={`https://serebii.net/pokedex-sm/icon/${this.state.number}.png`} alt="" />
                        <span>{this.state.number} - {this.props.name}</span>
                    </li>
                </Link>
    )}
}
export default PokeListItem