import React,{useState} from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
 const [array, SetArray] = useState("");

  const search = (event) => {
//     console.log(event.target.value);
    SetArray(event.target.value);
  }
  
  return (
    <div id="main">
      <h1>Search</h1>
      <input type="text" id="search-input" onChange={search} />
      <h1>Result</h1>
      <ul>
        {
          searchArray.filter((item) => {
            const searchValue = array.toLowerCase()
            const arrayItem = item.toLowerCase()

            return (searchValue && item.includes(searchValue) && searchValue !== arrayItem)

          }
          )

            .map((item, index) => (
              <li key={index}>{item}</li>
            ))
        }
      </ul>
    </div>
  )
}


export default App;
