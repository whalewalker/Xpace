import "./directory.scss";
import {sections} from "../../directory.data";
import {useState} from "react";
import MenuItem from "../menu-item/MenuItem";
const Directory = () =>{

    const [data, setData] = useState(sections);

    return(
        <div className="directory-menu">
            {data.map(({title, imageUrl, id, size}) => <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}/>)}
        </div>
    )
}

export default Directory;