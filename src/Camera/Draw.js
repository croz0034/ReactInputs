// input image
// Resource: https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa

import React, {
    Component
} from 'react';


class Draw extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Context: "",
            CurrentLine: [],
            PastLines: [],
            Deleted: []
        }
    }
    
    
    // I had to specifically set canvas width and height in here, otherwise the pixels were way off and as a result the drawing was off center.
    // Refs /kinda/ overrides normal react protocol, but I don't think there was any way to use this functionality without refferencing the DOM
     componentDidMount() {
        this.ctx = this.refs.Canvas.getContext('2d');
        this.refs.Canvas.height = window.innerHeight;
        this.refs.Canvas.width = window.innerWidth;
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "yellow";
         let img = this.props.Image;
         
         img.onload = ()=>{
         console.log(img)
         this.ctx.drawImage(img, 0, 0);
             
         }
      }

    drawInit(ev) {
        let d = translate(ev)
        this.setState({
            CurrentLine: [{ev}],
            Drawing: true
        })
        
        //Moves the "Paintbrush" to the current location without drawing a line to get there.
        this.ctx.moveTo(d.x, d.y)
    }
    drawMove(ev) {
        if(this.state.Drawing){
        let current = this.state.CurrentLine;
        let d = translate(ev)
        current.push(d);
        this.setState({
            CurrentLine: current
        })
        this.ctx.lineTo(d.x, d.y);
        this.ctx.stroke()
        }
    }
    drawEnd(ev) {
        let current = this.state.CurrentLine;
        let past = this.state.PastLines;
        past.push(current);
        this.setState({
            CurrentLine: [],
            PastLines: past,
            Drawing: false
        })
        
    }

    render() {
        return ( 
        <div>
            <canvas className = "Image"
            ref="Canvas"
            onTouchStart = {this.drawInit.bind(this)}
            onMouseDown = {this.drawInit.bind(this)}

            onTouchMove = {this.drawMove.bind(this)}
            onMouseMove = {this.drawMove.bind(this)}

            onTouchEnd = {this.drawEnd.bind(this)}
            onMouseUp = {this.drawEnd.bind(this)}/>
                
                <button className="Back"> &lt; </button>
                <button className="UnBack"> &gt; </button>
        </div>
        );
    }
}


// Using a mouse, and using a touch screen both have essentially the same components... But there is the possibility of multiple touch events, so you have to specify which one in the array to use before you can get the content.
let translate = (ev) => {
    if (ev.targetTouches) {
        return {
            x: ev.targetTouches[0].clientX,
            y: ev.targetTouches[0].clientY
        }
    } else {
        return {
            x: ev.clientX,
            y: ev.clientY
        }
    }
}


export default Draw;
