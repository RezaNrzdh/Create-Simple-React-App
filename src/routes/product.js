import { useState } from 'react';
import {useParams} from 'react-router-dom';

const Product = () => {

    const d = useParams();
    const [data] = useState([
        { id: 1, title: 'Javascript for beginners'},
        { id: 2, title: 'Javascript for advanced programmers'},
        { id: 3, title: 'Node JS: Advanced Concepts'},
        { id: 4, title: 'Node js: The Complete Guide to Build RESTful APIs'}
    ]);

    return(
        <div>
            <h2>{data[parseInt(d.id -1)].title}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.
            </p>
        </div>
    );
}

export default Product;