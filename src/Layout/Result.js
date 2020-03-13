import React from 'react';

const Result =({result}) =>{
return(

<div className="titledata">
    <img alt="heh" src={result.Poster} />
    <h3>{result.Title}</h3>
<h5>{result.Year}</h5>
</div>

)


}
export  default Result;