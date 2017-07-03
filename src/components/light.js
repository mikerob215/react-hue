import React from 'react';

const Light = ({light, onLightSelect}) => {
    return <a href="#"
              className="collection-item"
              onClick={e => {
                  e.preventDefault();
                  onLightSelect(light);
              }}>
        {light.name}
    </a>;
};

export default Light;