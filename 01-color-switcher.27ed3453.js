!function(){var e,t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),d=document.querySelector("body");d.style.display="flex",d.style.justifyContent="center",d.style.alignItems="center",d.style.height="100vh",d.style.padding="20px",d.style.gap="20px",t.addEventListener("click",(function(){t.disabled=!0,n.disabled=!1,e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){t.disabled=!1,n.disabled=!0,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.27ed3453.js.map