import React,{useState} from 'react';
import './header.css';
import logo from '../logo.svg';
import axios from 'axios';
import Results from './Results';

const api_key = 'http://www.omdbapi.com/?apikey=66808832';

/* state created using hooks */
const Header =() => {
  const [state, setState] = useState({

    searchquery: '',
    results: []
    
    });
    /*function that updates the searchquery in our state. */
    const getSearch = (e) =>{
      let searchquery= e.target.value;
      setState(prevState => {
        return{...prevState,
        searchquery:searchquery}
      })
    }
 /*function that updates the results in our state. */
    const handleClick = () =>{
    let q = state.searchquery;
    axios(api_key + '&s=' + q).then(({data}) => {
    let results = data.Search;
    console.log(results);
    setState(prevState => {
      return{...prevState, results:results}
    });
    }
    )
    
        }
        
    
    return(
       <React.Fragment>
    <div className="container">
       
      <img alt="hehe" src={logo} />
     
    
    <input className="searchbar" type="search" onChange={getSearch} placeholder="Search for a movie..." /> <button onClick={handleClick}>Search</button>
    
    
    </div>
    <hr />
      <Results results={state.results} />
    
    
    </React.Fragment>


)

}
export default Header;