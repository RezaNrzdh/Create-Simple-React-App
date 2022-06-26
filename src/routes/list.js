import { useState } from 'react';
import { Link } from "react-router-dom";

const List = () => {

    const [data] = useState([
        { id: 1, title: 'Javascript for beginners'},
        { id: 2, title: 'Javascript for advanced programmers'},
        { id: 3, title: 'Node JS: Advanced Concepts'},
        { id: 4, title: 'Node js: The Complete Guide to Build RESTful APIs'}
    ]);

    return(
        <div>
            <h2>LIST PAGE</h2>
            <ul>
                {
                    data.map((i, index) => {
                        return <li key={index}><Link to={`/product/`+i.id}>{i.title}</Link></li>
                    })
                }
            </ul>
        </div>
    );
}

export default List;