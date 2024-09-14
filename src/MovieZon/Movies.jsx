import React, { useState } from 'react'
import { movies } from './data'
const Movies = () => {
 const [movieList,setMovieList] = useState(movies);
 const filterByCategory = (cat)=>{
   setMovieList(movies.filter((data)=>data.category == cat))
 }
  return (
    <>
     {/* button s dev */}
     <div id='buttons'>
     <button onClick={()=>setMovieList(movies)} type="button" className="btn btn-outline-primary mx-3">All</button>
<button onClick={()=>filterByCategory("Action")} type="button" className="btn btn-outline-primary mx-3">Action</button>
<button onClick={()=>filterByCategory("Thriller")} type="button" className="btn btn-outline-light mx-3">Thriller</button>
<button onClick={()=>filterByCategory("Animation")} type="button" className="btn btn-outline-info mx-3">Animation</button>
<button onClick={()=>filterByCategory("Horror")} type="button" className="btn btn-outline-warning mx-3">Horror</button>
<button onClick={()=>filterByCategory("Drama")} type="button" className="btn btn-outline-info mx-3">Drama</button>
<button onClick={()=>filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">Scl-Fi</button>

     </div>
     {/* main data */}
    <div className='main-div'>
        {movieList.map((data)=>
         <div key={data.id} style={{maxWidth:"300px"}}>
            <div style={{padding:"10px"}} className='hover_effect'>
                <img src={data.poster_path} alt=""style={{width:"270px", height:"290px"}} />
            </div>
            <h4>{data.title}</h4>
            <p style={{textAlign:"center"}}>{data.release_date}</p>
         </div>
        )}
    </div>
    </>
  )
}

export default Movies