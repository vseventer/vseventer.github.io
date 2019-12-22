if (document.querySelector('.twitter-tweet')) {
  const el = document.createElement('script');
  el.async = true;
  el.setAttribute('src', '//platform.twitter.com/widgets.js');
  document.body.appendChild(el);
}
