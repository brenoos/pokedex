import React, {Component} from 'react'
// import { bindActionCreators } from 'redux'
// import { Link } from 'react-router-dom'
class PokeListItem extends Component  {
    constructor(props) {
        super(props);
        this.state = {number: props.number + 1};
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
            <li className="poke-list-item" >
                {/* <Link to={`/${pkm.number}`} > */}
                    <img src={`https://serebii.net/pokedex-sm/icon/001.png`} alt="" />
                    <span>{this.state.number} - {this.props.name}</span>
                {/* </Link> */}
            </li>
    )}
}
export default PokeListItem