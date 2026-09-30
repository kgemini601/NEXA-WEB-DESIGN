/* NEXA landing — 3D Nexbot: layered parallax (body / head / face) that looks at the cursor */
(function(){
  const ptr={x:null,y:null,t:0};
  const set=(x,y)=>{ptr.x=x;ptr.y=y;ptr.t=performance.now()};
  addEventListener('pointermove',e=>set(e.clientX,e.clientY),{passive:true});
  addEventListener('pointerdown',e=>set(e.clientX,e.clientY),{passive:true});
  document.documentElement.addEventListener('mouseleave',()=>{ptr.x=null});
  let raf=0;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

  window.nexaBotMarkup=()=>`
    <div class="nb-bubble"><strong>Hi, I’m Nexbot 👋</strong>Ask me anything about your courses</div>
    <div class="nb-stage" aria-label="Nexbot, the NEXA AI learning assistant">
      <div class="nb-shadow"></div><div class="nb-glow"></div>
      <div class="nb-float"><div class="nb-rig">
        <img class="nb-body" src="assets/nexbot-body.webp" alt="Nexbot, the NEXA AI assistant" draggable="false">
        <div class="nb-head">
          <img class="nb-shell" src="assets/nexbot-head.webp" alt="" aria-hidden="true" draggable="false">
          <img class="nb-face" src="assets/nexbot-face.webp" alt="" aria-hidden="true" draggable="false">
        </div>
      </div></div>
    </div>`;

  window.initNexaBot=function(){
    cancelAnimationFrame(raf);
    const stage=document.querySelector('.nb-stage'); if(!stage) return;
    const rig=stage.querySelector('.nb-rig'), head=stage.querySelector('.nb-head'),
          face=stage.querySelector('.nb-face'), shell=stage.querySelector('.nb-shell'), body=stage.querySelector('.nb-body');
    let cx=0, cy=0;
    (function frame(now){
      if(!stage.isConnected) return;               // page changed (login/dashboard) — stop
      const r=stage.getBoundingClientRect();
      let tx,ty;
      if(ptr.x===null || now-ptr.t>3500){          // no cursor / touch idle: gentle look-around
        tx=Math.sin(now/1900)*.45; ty=Math.sin(now/2700+1)*.18;
      }else{                                        // aim from the robot's face toward the cursor
        tx=clamp((ptr.x-(r.left+r.width*.59))/(innerWidth*.42),-1,1);
        ty=clamp((ptr.y-(r.top+r.height*.29))/(innerHeight*.42),-1,1);
      }
      cx+=(tx-cx)*.11; cy+=(ty-cy)*.11;             // smoothing
      head.style.transform=`translateZ(34px) rotateY(${cx*17}deg) rotateX(${-cy*12}deg) rotateZ(${cx*2.2}deg)`;
      face.style.transform=`translate3d(${cx*3.4}%,${cy*2.8}%,22px)`;   // face slides further than the shell = depth
      rig.style.transform=`rotateY(${cx*5}deg) rotateX(${-cy*3.5}deg)`;
      shell.style.filter=`drop-shadow(0 6px 8px rgba(40,50,140,.18)) brightness(${(1.02-cy*.05+cx*.02).toFixed(3)})`;
      body.style.transform=`translate(${(-cx*.8).toFixed(2)}%,0)`;
      raf=requestAnimationFrame(frame);
    })(performance.now());
  };
})();
