let x = '[`ColorToken`](types.md#colortoken)';

x = x.replace(
  new RegExp(/^([a-z]).md(#[a-z0-9])$/, 'gi'),
  `https://huetiful-js.com/api/$1/index.html$2`
);
console.log(x);
