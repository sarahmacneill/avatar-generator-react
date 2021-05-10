import React, {useEffect, useRef, useState} from 'react';
import cheese from '../resources/cheese.png';
import smile from '../resources/smile-sad.png';

export default function Canvas() {
  const canvas = useRef(null);
  const img = useRef(null);
  const img2 = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [dataUrl, setDataUrl] = useState(null);

  useEffect(() => {
    if (canvas) {
      setCtx(canvas.current.getContext("2d"));
    }
  }, [canvas])

  useEffect(() => {
    if (ctx) {
      ctx.drawImage(img.current, 0, 0, 500, 300);
      ctx.drawImage(img2.current, 10, 40, 70, 70);
      ctx.font = "40px Courier";
      ctx.fillText('say cheese!', 210, 75);
      setDataUrl(canvas.current.toDataURL());
    }
  });

  return(
    <div className="container">
      <div className="row">
        <canvas ref={canvas} width="500px" height="300px"/>
      </div>
      <div className="m-3">
        <button className="btn btn-primary btn-lg" onClick={() => {navigator.clipboard.writeText(dataUrl)}}>Copy image link</button>
      </div>
      <img ref={img} src={cheese} style={{display: 'none'}}/>
      <img ref={img2} src={smile} style={{display: 'none'}}/>
    </div>
  )
}