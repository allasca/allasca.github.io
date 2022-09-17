/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  const config = hexo.theme.config.disqusjs;
  if (!config.enable || !config.shortname || !config.apikey) return;

  injects.comment.raw('disqusjs', `
  <div class="comments disqusjs">
    <noscript>Please enable JavaScript to view the comments powered by Disqus.</noscript>
  </div>
  `, {}, { cache: true });

  injects.bodyEnd.file('disqusjs', path.join(hexo.theme_dir, 'layout/_third-party/comments/disqusjs.njk'));

});
