import React from 'react';
import { moviesData } from './MovieData';
import active from '../starFull.png';
import inactive from '../starEmpty.png';

function Rating(){
    let arr = [...Array(6).keys()].slice(1);
return(
<div style={{height:'20px', display:'flex', flexDirection:'row'}}>
{
    arr.map(el=><img src={el<=moviesData.rating ? active : inactive} alt={el<=moviesData.rating ? 'activeStar' : 'inActiveStar'}/>)
}

</div>
)
}
export default Rating;