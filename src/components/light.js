import React from 'react';

const Light = ({light, onLightSelect}) => {
    console.log(onLightSelect);
    return <a href="#" onClick={e => {
        e.preventDefault();
        onLightSelect(light);
    }}>
        {light.name}
    </a>;
};

export default Light;