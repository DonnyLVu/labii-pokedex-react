import React from 'react'
import PokeItem from './PokeItem'
import './App.css';
import { Link } from 'react-router-dom';



export default class PokeList extends React.Component {
    render() {
        return (
            <div className="poke-item">
                <div className='pokemon-list'>
                {
                    this.props.pokeData.length === 0
                    ? <iframe src="https://giphy.com/gifs/ZBQhoZC0nqknSviPqT/html5" width="350" height="350" frameBorder="1" title="GifTitle"  allowFullScreen></iframe>
                    :
                    <div className="pokemon-list"> 
                    {
                    this.props.pokeData.map(id => 
                    { return (
                    <Link to={`/pokeDetail/${id.pokemon}`}>   
                    <PokeItem 
                    name={id.pokemon}
                    image={id.url_image}
                    type_1={id.type_1}
                    egg_group_1={id.egg_group_1}
                    attack={id.attack}
                    defense={id.defense}/>
                    </Link>)
                    })
                    }
                    </div>
                }
                </div>
            </div>
        )
    }
}
// export default class PokeList extends Component {
//     render() {
//         return (
//             <div className='poke-item'>
//                 <div className='pokemon-list'>
//                 {
//                     this.props.pokeData.filter((item) => {
//                         if (!this.props.type) return true;
//                         if (item.type_1 === this.props.type) return true;
//                         return false;
//                     })
//                     .filter((item) => {
//                         if (!this.props.egg) return true;
//                         if (item.egg_group_1 === this.props.egg) return true;
//                         return false;
//                     })
//                     .filter((item) => {
//                         if (!this.props.submitProp) return true;
//                         if (item.pokemon === this.props.submitProp) return true;
//                         return false;
//                     })

//                     .filter((item) => {
//                         if (!this.props.changeProp) return true;
//                         if (item.pokemon === this.props.changeProp) return true;
//                         return false;
//                     })
//                     .map(pokemon =>
//                     <PokeItem className='pokemon-item' 
//                     name={pokemon.pokemon}
//                     image={pokemon.url_image}
//                     type_1={pokemon.type_1}
//                     egg_group_1={pokemon.egg_group_1}
//                     attack={pokemon.attack}
//                     defense={pokemon.defense}/>)
//                 }
//                 </div>
//             </div>
//         )
//     }
// }
