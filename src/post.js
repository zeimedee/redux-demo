import React,{ useEffect }from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getData } from './js/actions/index'

function Posts() {
    const dispatch = useDispatch();
    const remoteArticles = useSelector(state => state.remoteArticles.slice(0,10));
    
    useEffect(() => {
       dispatch(getData());
    },[dispatch])
    

    return (
        <div>
            <ul>
                {remoteArticles.map((el) =>(
                    <li key={el.id}>{el.title}</li>
                )
                )}
            </ul>
        </div>
    )
}

export default Posts;
