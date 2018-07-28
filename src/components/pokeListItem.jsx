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
        //   var string = this.state.number.toString
        //   console.log(string.length)
      }

    acrescentaZero() {
        let doisZeros = '00'
        let umZero = '0'
        let teste = this.state.number.toString
        if(teste.length < 10 ){
            console.log(teste)
            // this.setState({number: `${doisZeros}${string}`})
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