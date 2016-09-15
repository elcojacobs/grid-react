export const gridClick = (coordinates) => {
    console.log('You clicked on valve: ', coordinates.y, coordinates.x);
    return {
        type: 'GRID_CLICKED',
        payload: coordinates
    };
};