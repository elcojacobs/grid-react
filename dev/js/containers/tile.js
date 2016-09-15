import React from 'react';

const Tile = (props) => {
    let x = props.x;
    let y = props.y;
    let coordinates;
    if (props.showCoordinates){
        coordinates = <span className='coordinates'>{y.toString () + ',' + x.toString()}</span>;
    }

    return (
        <div className='tile'>
            <div className='tile-content'>{props.children}</div>
            {coordinates}
        </div>
    );
};
Tile.defaultPropsTypes = {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    showCoordinates: React.PropTypes.boolean
};
Tile.defaultProps = {
    x: -1,
    y: -1, 
    showCoordinates: true
};

export default Tile;