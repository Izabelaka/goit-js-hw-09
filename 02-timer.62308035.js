!function(){var e={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},t=document.querySelector("[data-start]");t.disabled=!0;var n=null,a=null;function o(e){return String(e).padStart(2,"0")}flatpickr("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){(a=e[0])<=new Date?(alert("Please choose a date in the future"),t.disabled=!0):t.disabled=!1}}),t.addEventListener("click",(function(){t.disabled=!0,n=setInterval((function(){var t,r,s,d,u,l,c,i,m,f=a-new Date;if(f<=0)clearInterval(n),alert("Time is up!");else{var h=(t=f,u=24*(d=60*(s=60*(r=1e3))),l=Math.floor(t/u),c=Math.floor(t%u/d),i=Math.floor(t%u%d/s),m=Math.floor(t%u%d%s/r),{days:l,hours:c,minutes:i,seconds:m});e.days.textContent=o(h.days),e.hours.textContent=o(h.hours),e.minutes.textContent=o(h.minutes),e.seconds.textContent=o(h.seconds)}}),1e3)}))}();
//# sourceMappingURL=02-timer.62308035.js.map