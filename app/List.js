import React, { Component } from 'react';
import {render} from 'react-dom';
import Card from './Card';

class List extends Component {
  render() {
    var cards = this.props.cards.map((card) => {
      return <Card key={card.id} id={card.id}
                   /*다중
                   행
                   주석
                    */
                   title={card.title}
                   description={card.description}
                   color={card.color}
                   tasks={card.tasks} />
    });

    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
};

export default List;