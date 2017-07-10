import React from 'react';
import {Link} from "react-router-dom";

const Light = ({lightId, light, onLightSelect}) => {
    return <Link
        to={`/light/${lightId}`}
        className="collection-item">
        {light.name}
    </Link>;
};

export default Light;