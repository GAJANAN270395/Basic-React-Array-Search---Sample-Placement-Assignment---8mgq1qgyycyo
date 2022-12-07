import React,{useState} from 'react'

import '../styles/App.css';


const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta"
];
const App = () => {
  //const [value, setValue] = useState('');

  const [searchValue, setSearchValue] = useState("");

  return (
    <div id="main">
      <h4>Search</h4>
      <div>
        <input
          type="text"
          value={searchValue}
          id="search-input"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div>

        <h4>Result</h4>

        <ul>                    
          {
            searchArray.filter((item) =>{
              return (
                searchValue &&
                item.match(new RegExp(searchValue, "i"))
              );
            })
            .map((item) => {
              return <li key={item}>{item} </li>
            })
          }
      
        </ul>
      </div>
    </div>
  );
};

export default App;

// https://www.codingdeft.com/posts/react-filter/
