import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from 'react-force-graph';
import SpriteText from 'three-spritetext';
// import
import data from './data.json';

class App extends React.Component {
    componentDidMount() {
        // Deactivate existing forces
        this.fg.d3Force('charge').strength(-400);
        // Add collision and bounding box forces
        // this.fg.d3Force('collide', d3.forceCollide(4));
    }
    render() {
        return (
            <div className="App">
                <ForceGraph2D
                    ref={el => this.fg = el}
                    graphData={data}
                    nodeRelSize={3}
                    d3Force={("link.distance", 100)}
                    nodeAutoColorBy="group"
                    nodeThreeObject={node => {
                        const sprite = new SpriteText(node.id);
                        sprite.color = node.color;
                        sprite.textHeight = 8;
                        return sprite;
                    }}
                    dagMode={"td"}
                    dagLevelDistance={80}
                />
                });
            </div>
        );
    }
}

export default App;
