# placeholder-shown-polyfill
Polyfill for pseudo selector :placeholder-shown

SPEC: https://drafts.csswg.org/selectors-4/#placeholder

Reference:  https://codepen.io/wesbos/pen/KggoOo

Usage:

HTML:
`<input type="text" placeholder="First Name">`

CSS:
```
input {
  border: 5px solid red;
  outline: 0;
  font-size: 20px;
  padding: 20px;
  margin: 50px;
}

input:-moz-placeholder {
  border-color: green;
}
input:-ms-input-placeholder {
  border-color: green;
}
input.placeholder-shown {
  border-color: green;
}
input:placeholder-shown {
  border-color: green;
}
```
