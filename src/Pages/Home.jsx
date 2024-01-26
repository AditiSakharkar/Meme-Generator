import React, {useEffect, useState} from 'react';
import { getAllMemes } from '../api/Memes';
import Memecard from '../components/Mcard';

const Homepage = ()=>{
    const [data, setdata] = useState([]);

    useEffect(
        ()=>{
            getAllMemes().then((memes) => setdata(memes.data.memes) );
        },

        []);
    return(
        <div className='row'>
            {
                data.map(el => <Memecard img={el.url} title= {el.name} />)
            }
        </div>
    );
};

export default Homepage;
