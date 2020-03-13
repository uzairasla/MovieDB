import React from 'react';
import Result from './Result';

const Results =({results}) =>{

return(
    
<section className="searchresult">
{results.map(result => (
    <Result key={result.imdbID} result = {result} />
 
))
}


</section>

)


}
export default Results;