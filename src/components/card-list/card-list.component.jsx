import { Component } from 'react';

class CardList extends Component {
    render() {
        console.log(this.props);


        return (
            <div>
                <h1>Hello I'm the CardList Component</h1>
            </div>
        );
      }
    }

    export default CardList;