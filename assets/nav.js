/* Services dropdown: click or tap to open; also opens on hover where a mouse is used.
   Closes on outside click, Escape, or when focus leaves the menu. */
(function(){
  var drops=document.querySelectorAll('.nav-drop');
  if(!drops.length){return;}
  var hover=window.matchMedia&&window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  drops.forEach(function(d){
    var sum=d.querySelector('summary');
    sum.setAttribute('aria-haspopup','true');
    function sync(){sum.setAttribute('aria-expanded',d.open?'true':'false');}
    d.addEventListener('toggle',sync);sync();
    if(hover){
      var t,opened=0;
      d.addEventListener('mouseenter',function(){clearTimeout(t);if(!d.open){d.open=true;opened=Date.now();}});
      d.addEventListener('mouseleave',function(){t=setTimeout(function(){d.open=false;},180);});
      /* a click straight after hover-open would otherwise toggle it shut again */
      sum.addEventListener('click',function(e){if(Date.now()-opened<600){e.preventDefault();d.open=true;}});
    }
    d.addEventListener('focusout',function(e){if(!d.contains(e.relatedTarget)){d.open=false;}});
  });
  document.addEventListener('click',function(e){drops.forEach(function(d){if(!d.contains(e.target)){d.open=false;}});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){drops.forEach(function(d){if(d.open){d.open=false;d.querySelector('summary').focus();}});}});
})();
