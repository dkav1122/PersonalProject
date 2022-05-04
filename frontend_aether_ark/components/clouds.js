/* ============================================================================================== 
This copyright notice must be kept untouched in the stylesheet at all times.
The original version of this stylesheet and the associated (x)html 
is available at http://www.script-tutorials.com/night-sky-with-twinkling-stars/
Copyright (c) Script Tutorials. All rights reserved.
This stylesheet and the associated (x)html may be modified in any way to fit your requirements.
================================================================================================= */
class Clouds extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <Style>
    @keyframes move-twink-back {
        from {background-position:0 0;}
        to {background-position:-10000px 5000px;}
    }
    @-webkit-keyframes move-twink-back {
        from {background-position:0 0;}
        to {background-position:-10000px 5000px;}
    }
    @-moz-keyframes move-twink-back {
        from {background-position:0 0;}
        to {background-position:-10000px 5000px;}
    }
    @-ms-keyframes move-twink-back {
        from {background-position:0 0;}
        to {background-position:-10000px 5000px;}
    }
    
    @keyframes move-clouds-back {
        from {background-position:0 0;}
        to {background-position:10000px 0;}
    }
    @-webkit-keyframes move-clouds-back {
        from {background-position:0 0;}
        to {background-position:10000px 0;}
    }
    @-moz-keyframes move-clouds-back {
        from {background-position:0 0;}
        to {background-position:10000px 0;}
    }
    @-ms-keyframes move-clouds-back {
        from {background-position: 0;}
        to {background-position:10000px 0;}
    }
    
    .stars, .twinkling, .clouds {
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      width:100%;
      height:100%;
      display:block;
    }
    
    .stars {
        background:#000 url(/images/stars.png) repeat top center;
        z-index:0;
    }
    
    .twinkling{
        background:transparent url(/images/twinkling.png) repeat top center;
        z-index:1;
        
        -moz-animation:move-twink-back 200s linear infinite;
        -ms-animation:move-twink-back 200s linear infinite;
        -o-animation:move-twink-back 200s linear infinite;
        -webkit-animation:move-twink-back 200s linear infinite;
        animation:move-twink-back 200s linear infinite;
    }
    
    .clouds{
        background:transparent url(/images/clouds3.png) repeat top center;
        z-index:3;
        
        -moz-animation:move-clouds-back 200s linear infinite;
        -ms-animation:move-clouds-back 200s linear infinite;
        -o-animation:move-clouds-back 200s linear infinite;
        -webkit-animation:move-clouds-back 200s linear infinite;
        animation:move-clouds-back 200s linear infinite;
    }
    </style>
    <div>
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="clouds"></div>
  </div>
    `;
}
}
customElements.define('clouds-component', Clouds);