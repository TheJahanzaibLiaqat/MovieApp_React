import { useEffect, useState } from "react";
import Result from "./Components/Result";
import axios from "axios";


function App() {
  const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  const getAllMovies = () => {
      axios.get(APIURL)
      .then(
        (response)=> {
           setMovies(response.data.results)
           console.log(response.data.result)
        }
      )

      
      .catch(
        (error)=>{
console.log(error)
        }
      )

      
  }

  const searchChange = (e) => {
    setSearch(e.target.value)
  }

  const getSearchedMovies = () => {
axios.get(SEARCHAPI + search)
.then(
  (response)=>{
setMovies(response.data.results)
  }
)
.catch(
  (error)=>{
    console.log(error)
  }
)
  }

  useEffect(()=>{
if (search === "") {
  getAllMovies()
} else {
  getSearchedMovies()
}
  },[search])
  return (
    <>
    <div >
      <h1 className=" text-center text-5xl text-white my-12 underline">Jazzy's StuDio</h1>
      <div className="max-w-[1300px] bg-transparent shadow-xl min-h-[400px] border-black border mx-auto p-6">
        <div>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={searchChange}
            className="w-full shadow-md shadow-black border-black border h-10 rounded-md p-3 outline-none"
          />
        </div>
        <div>
        <Result movies={movies} /> 
          
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
