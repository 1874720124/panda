<template>
  <div id="app" class="gome-app">
    <div class="gome-header">
      <mt-header title="国美商城">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    </div>
    <div class="gome-main">
      <router-view />
    </div>
    <div class="gome-footer">
      <router-view name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  created () {
  }
}
</script>

<style lang="scss">
  html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
em,
img,
strong,
sub,
sup,
b,
u,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
figure,
figcaption,
footer,
header,
hgroup,
main,
menu,
nav,
section,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body,
.gome-app {
  height: 100%;
  color: #333;
  display: flex;
  flex-direction: column;
  .gome-footer{
    height: 60px;
    border-top: 1px solid #eeeeee;
  }
  .gome-main{
    flex: 1;
  }
}
@font-face {
  font-family: 'gome-icon';  /* project id 1275683 */
  src: url('//at.alicdn.com/t/font_1275683_gr1tzvjvqxb.eot');
  src: url('//at.alicdn.com/t/font_1275683_gr1tzvjvqxb.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1275683_gr1tzvjvqxb.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1275683_gr1tzvjvqxb.woff') format('woff'),
  url('//at.alicdn.com/t/font_1275683_gr1tzvjvqxb.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1275683_gr1tzvjvqxb.svg#iconfont') format('svg');
}
.gome-icon{
  font-family: gome-icon;
}
</style>
