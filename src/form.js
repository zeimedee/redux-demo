import React,{useState} from 'react'
import { useDispatch} from 'react-redux';
import {addArticle} from './js/actions/index';

// const mapDispatchToProps = (dispatch) =>{
//         return {
//             addArticle: article => dispatch(addArticle(article))
//         };
// }

const Cform = () => {
    const[title, SetTitle]  = useState('');
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addArticle(title))
        SetTitle('');

    }
    return (
        <div>
         <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={e => SetTitle(e.target.value)}
                />
                </div>
                <button 
                type="submit"
                >SAVE</button>
         </form>
        </div>
    )
}
//const Form = connect(null,mapDispatchToProps)(Cform);
export default Cform;