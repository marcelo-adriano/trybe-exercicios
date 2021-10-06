import React from 'react';
import './pokemon.css';

class Pokemon extends React.Component {
    render() {
        return (
            <div className='pokemon-card'>
                <div className='pokemon-info'>
                    <span>{this.props.pokemon.name}</span>
                    <span>{this.props.pokemon.type}</span>
                    <span>Average weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</span>
                </div>
                <img className='pokemon-sprit' src={this.props.pokemon.image} alt={this.props.pokemon.moreInfo} />
            </div>
        );
    }
}

export default Pokemon;
