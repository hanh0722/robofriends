import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/cardList';
import '../components/style.css';
import SearchBox from '../components/SearchBox';
import '../components/styleFont.css';
import Scro from '../components/scroll';
// to use state we need to come back class

const App = () => {
    // constructor(){
    //     super();
    //     this.state = {
    //         Robots: [],
    //         searchfield: ''
    //     }
    // }
    // add state to constructor, declare state in construcstor
    // to use constructor we need to have super()
    const [Robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    // for the searchbox
    // rule of thumbs, use arrow function with the function we create

    // componentDidMouth(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(data => this.setState({Robots: data}));
    // }
    const onSearchChange = (event) =>{
        setSearchfield(event.target.value);
    }
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setRobots(data);
        });
    }, []);
    
    // render function
    const filterRobots = Robots.filter((robot) =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        // make everything lowercase with toLowerCase()
        // includes mean to check in the name of robots have the value of search or not
        // if anything in the string includes to lowercase -> return true
    })
    // if we do the function -> this.state -> it's not refer to the app -> event happened in the input
    // the value of this -> input, input hasn't state.robot -> this refers to the input 

    const clickCount = () =>{
        setCount(count + 1);
    }
    return (
        Robots.length !== 0 ?
        <div className = "tc">
            <p>{count}</p>
            <h1 onClick={clickCount}>RoboFriends</h1>
            <SearchBox searchChange = {onSearchChange}/>
            <Scro>
                <CardList Robots = {filterRobots}/> 
            </Scro>
            {/* Because class is an object */}
            {/* // App is state but CardList has props Robots so the parent
            // is state but the children is props */}
            {/* To wrap in bracket we need to use props.children because anything in react has 
                props and we can access it even though we don't have any props
                */}
        </div>
        :
        <h1 style={{textAlign: 'center', marginTop: '50px'}}>Loading</h1>
    )
}
export default App;
// subscribe any changes state to redux store => redux store is createStore(searchRobots);
// higher order function => function return another function