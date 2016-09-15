import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Tile from './tile.js';
import TileEmpty from './tile-empty.js';
import TileMotorValve from './tile-motor-valve';

class TileGrid extends Component {
    constructor(props) {
        super(props);
        //Set your state here using this.state = {};
        //or leave blank if you don't want anything set in state
    }

    getTileContent(x, y) {
        for (let tileContent of this.props.layout) {
            if(tileContent.x == x && tileContent.y == y){
                return <TileMotorValve />;
            }
        }
        return <TileEmpty />;
    }

    render() {        
        let tiles = [];
        let row = [];
       
        let cols = this.props.cols;
        let rows = this.props.rows;
        for (let y =0; y < rows; y++) {
            row = [];
            for (let x=0; x < cols; x++) {
                let key = 'tile-' + x.toString() + '-' + y.toString();
                row.push(
                    <Tile key={key} x={x} y={y}>
                        {this.getTileContent(x,y)}                     
                    </Tile>
                );
            }
            tiles.push(<div className='row' key={'row' + y.toString()}>{row}</div>);
        }
        return <div>{tiles}</div>;
    }
}

function mapStateToProps(state) {
    let cols = state.grid.cols;
    let rows = state.grid.rows;
    var tileContent =[];
    for (let y =0; y < rows; y++) {
        for (let x=0; x < cols; x++) {
            tileContent.push(<span>{y*cols + x}</span>);
        }
    }

    return {
        rows: rows,
        cols: cols,
        showCoordinates: state.grid.showCoordinates,
        layout: state.layout
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TileGrid);