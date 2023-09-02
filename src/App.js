import './styles/App.css';
import axios from "axios";
import icon from './assets/icons8-search.svg'

import {useState} from "react";
import MySearch from "./components/search/MySearch";
import Info from "./components/info/Info";

function App() {

  // const key = '05532168e8aaf3b75b810b5a29f387ec\n';
  // const url = `api.openweathermap.org/data/3.0/forecast?lat=44.34&lon=10.99&appid={${key}}`
  const api = {
      key: "05532168e8aaf3b75b810b5a29f387ec",
      base: "https://api.openweathermap.org/data/3.0"
  }



  const [search, setSearch] = useState('');
  const [data, setData] = useState({})


  const searchLocation = () => {
      try {
          if(!search) {
              console.log('Введите значение!')

          } else {
              axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&lang=ru&appid=${api.key}`)
                  .then(res => {
                      setData(res.data)
                      console.log(res.data)

                  })
              setSearch('')
          }

      } catch (err) {
          console.log(err)
      }
  }



  return (
    <div className="App">
      <div className="weather">
          <div className="container">
              <MySearch props={{search: search, setSearch: setSearch, searchLocation: searchLocation}}/>
              <Info data={data}/>
          </div>

      </div>
    </div>
  );
}

export default App;
