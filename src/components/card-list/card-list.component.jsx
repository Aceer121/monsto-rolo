import { Component } from 'react';

class cardList extends Component {
    render() {
        console.log(this.props.monsters);
        console.log('render from cardlist');
       const { monsters } =this.props;
        
        return (
            <div>
                {monsters.map((monster)=>(
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        );
      }
    }

    export default cardList;