import React, { Component } from 'react';

export class Animation extends Component {
  constructor() {
    super();
    this.ctx = null;
    this.cw = null;
    this.ch = null;
    this.spacing = null;
    this.lineCount = 35;
    this.lineWidth = 1.5;
    this.lines = [];
    this.fillStyle = 'transparent';
    this.strokeStyle = '#ffdde1';
    this.tick = 15;
    this.loop = this.loop.bind(this);
    this.initCanvas = this.initCanvas.bind(this);
  }

  componentDidMount() {
    this.initCanvas();
    window.requestAnimationFrame( this.loop );
    window.addEventListener('resize', this.initCanvas);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.initCanvas);
  }

  initCanvas() {
    const box = this.wrapper.getBoundingClientRect();
    this.ctx = this.canvas.getContext( '2d' );
    this.cw = this.canvas.width = box.width;
    this.ch = this.canvas.height = box.height;
    this.spacing = this.ch / this.lineCount;
    this.lines = Array.from(Array(this.lineCount))
      .map((y, i) => ({
        y: i * this.spacing + this.spacing,
        xOff: this.cw / 1,
        yOff: 200
      }));
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.strokeStyle = this.strokeStyle;
  }

  loop() {
    this.ctx.clearRect( 0, 0, this.cw, this.ch );

    this.lines.forEach((line, i) => {
      line.xOff = ( this.cw * 1.7 ) - Math.sin( (this.tick + ( i * 26 ) ) / 200 ) * ( this.cw * 0.2 );
      line.yOff = Math.min( 0, -Math.abs( ( this.cw * 1.3 ) - line.xOff ) + 5 ) * 1.85;
      this.ctx.beginPath();
      this.ctx.moveTo( 3, line.y );
      this.ctx.lineTo(
        line.xOff + line.yOff * 1.6,
        line.y
      );
      this.ctx.bezierCurveTo(
        line.xOff + line.yOff * 0.16, line.y,
        line.xOff + line.yOff * 0.17, line.y + line.yOff,
        line.xOff, line.y + line.yOff
      );
      this.ctx.bezierCurveTo(
        line.xOff - line.yOff * 0.15, line.y + line.yOff,
        line.xOff - line.yOff * 0.10, line.y,
        line.xOff - line.yOff * 1.95, line.y
      );
      this.ctx.bezierCurveTo(
        line.xOff - line.yOff * 0.13, line.y + line.yOff,
        line.xOff - line.yOff * 0.10, line.y,
        line.xOff - line.yOff * 1.95, line.y
      );
      this.ctx.lineTo(
        this.cw,
        line.y
      );
      this.ctx.fill();
      this.ctx.stroke();
    });

    this.tick++;

    window.requestAnimationFrame( this.loop );
  }


    render() {
      return (
        <div className="animation" ref={e => { this.wrapper = e; }}>
          <canvas id="c" ref={e => { this.canvas = e; }}></canvas>
        </div>
      )
    }
}

export default Animation;
