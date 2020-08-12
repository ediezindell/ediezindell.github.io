<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
/* reset css */
*{box-sizing:border-box}
:after,:before{box-sizing:inherit}
html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}
body{margin:0}
main{display:block}
h1,h2,h3,h4,h5,h6{font-size:inherit;line-height:inherit;font-weight:inherit;margin:0}
address,blockquote,dl,figure,form,iframe,ol,p,pre,table,ul{margin:0}
ol,ul{padding:0;list-style:none}
dt{font-weight:700}
dd{margin-left:0}
hr{box-sizing:content-box;height:0;overflow:visible;border:0;border-top:1px solid;margin:0;clear:both;color:inherit}
pre{font-family:monospace;font-size:inherit}
address{font-style:inherit}
a{background-color:transparent;text-decoration:none;color:inherit}
abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}
b,strong{font-weight:bolder}
code,kbd,samp{font-family:monospace;font-size:inherit}
small{font-size:80%}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sub{bottom:-.25em}
sup{top:-.5em}
img{border-style:none;vertical-align:bottom}
embed,iframe,object{border:0;vertical-align:bottom}
button,input,optgroup,select,textarea{-webkit-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;border:0;background:transparent;padding:0;margin:0;outline:0;border-radius:0;text-align:inherit}
[type=checkbox]{-webkit-appearance:checkbox;appearance:checkbox}
[type=radio]{-webkit-appearance:radio;appearance:radio}
button,input{overflow:visible}
button,select{text-transform:none}
[type=button],[type=reset],[type=submit],button{cursor:pointer;-webkit-appearance:none;appearance:none}
[type="button"][disabled],[type="reset"][disabled],[type="submit"][disabled],button[disabled]{cursor:default}
[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}
[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}
fieldset,option{padding:0}
fieldset{margin:0;border:0;min-width:0}
legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}
progress{vertical-align:baseline}
textarea{overflow:auto}
[type=checkbox],[type=radio]{padding:0}
[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}
[type=search]{outline-offset:-2px}
[type="search"]::-webkit-search-decoration{-webkit-appearance:none}
::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
label[for]{cursor:pointer}
details{display:block}
summary{display:list-item}
table{border-collapse:collapse;border-spacing:0}
caption{text-align:left}
td,th{vertical-align:top;padding:0}
th{text-align:left;font-weight:700}
[hidden],template{display:none}

/* user style */
body {
  font-size: 16px;
  font-family:'Courier New', Courier, monospace;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
}

#nav {
  display: block;
  background-color: var(--sub-color);
  font-size: 1.2em;
  /* height: 32px; */
  /* border-bottom: 1px solid #aaa; */
}
#nav li {
  margin: 0;
}
#nav a {
  display: inline-block;
  padding: 2px 5px;
  margin: 10px;
  letter-spacing: 3px;
  color: var(--main-color);
  border: 1px solid var(--main-color);;
  border-radius: 5px;
}
#nav a:hover {
  border: 1px solid transparent;
  /* color: #888; */
}

:root {
  --main-color: #fdfbfc;
  --sub-color: #008094;
  --text-main-color: #333;
  --text-sub-color: #888;
  --text-sub2-color: #aaa;
  --bg-color: #fff;
  --link-color: #ff8888;
  --shadow-color: #ccc;
  --card-item-color: rgba(192, 192, 192, 0.1);
}

a {
  color: var(--link-color);
}
body {
  color: var(--text-main-color);
  background-color: var(--bg-color);
}

</style>
