import React, {useEffect, useRef, useState} from 'react';

export default function Canvas() {
  const canvasHeight = 300;
  const canvasWidth = 500;
  const canvas = useRef(null);
  const img = useRef(null);
  const img2 = useRef(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    if (canvas) {
      setCtx(canvas.current.getContext("2d"));
    }
  }, [canvas])

  function drawCheese() {
    ctx && ctx.drawImage(img.current, 0, 0, 500, 300);
  };

  function drawSmile() {
    ctx && ctx.drawImage(img2.current, 10, 40, 70, 70);
  };

  function drawText() {
    if (ctx) {
      ctx.font = "40px Courier";
      ctx.fillText('say cheese!', 210, 75);
    }
  }

  function clearCanvas() {
    ctx && ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  }

  return(
    <div className="container">
      <div className="row">
        <canvas ref={canvas} width={canvasWidth + 'px'} height={canvasHeight + 'px'}/>
      </div>
      <div>
        <button className="btn btn-secondary m-1" onClick={drawCheese}>Draw cheese</button>
        <button className="btn btn-secondary m-1" onClick={drawSmile}>Draw smile</button>
        <button className="btn btn-secondary m-1" onClick={drawText}>Draw text</button>
        <button className="btn btn-danger m-1" onClick={clearCanvas}>Clear canvas</button>
      </div>
      <div className="m-3">
        <button className="btn btn-primary btn-lg" onClick={() => {navigator.clipboard.writeText(canvas.current.toDataURL())}}>Copy image URL</button>
      </div>
      <img ref={img} src={process.env.PUBLIC_URL + '/resources/cheese.png'} style={{display: 'none'}} alt="" />
      <img ref={img2} src={process.env.PUBLIC_URL + 'resources/smile-sad.png'} style={{display: 'none'}} alt="" />
    </div>
  )
}