// Load tweets.
if (document.querySelector('.twitter-tweet')) {
  const el = document.createElement('script');
  el.src = '//platform.twitter.com/widgets.js';
  el.async = true;
  document.body.appendChild(el);
}

// Load disqus.
if (process.env.NODE_ENV === 'production' && document.getElementById('disqus_thread')) {
  const el = document.createElement('script');
  el.src = `https://${settings.disqus}.disqus.com/embed.js`;
  el.async = true;
  el.setAttribute('data-timestamp', +Date.now());
  document.body.appendChild(el);
}

// Embed bundle in live mode.
if (process.env.WEBPACK_DEV_SERVER) {
  const el = document.createElement('script');
  el.src = `${__webpack_public_path__}scripts/bundle.js`;
  el.async = true;
  document.body.appendChild(el);
}
