var ICON_COLOR = '#FFFFFF';
var ICON_SIZE = '16px';

var Icon = '<?xml version="1.0" ?><!DOCTYPE svg PUBLIC \'-//W3C//DTD SVG 1.1//EN\' ' +
  ' \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="' + ICON_SIZE + '" style="enable-background:new 0 0 32 32;" ' +
  'version="1.1" viewBox="0 0 32 32" width="' + ICON_SIZE + '" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" ' +
  'xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1"/><g id="fullscreen"><g><polygon ' +
  'points="27.414,24.586 22.828,20 20,22.828 24.586,27.414 20,32 32,32 32,20" style="fill:' + ICON_COLOR +
  ';"/><polygon points="12,0 0,0 0,12 4.586,7.414 9.129,11.953 11.957,9.125 7.414,4.586" style="fill:' + ICON_COLOR +
  ';"/><polygon points="12,22.828 9.172,20 4.586,24.586 0,20 0,32 12,32 7.414,27.414" style="fill:' + ICON_COLOR +
  ';"/><polygon points="32,0 20,0 24.586,4.586 20.043,9.125 22.871,11.953 27.414,7.414 32,12" style="fill:' +
  ICON_COLOR + ';"/></g></g></svg>';

function renderBlock(block) {
  if (!block.body) return;

  var SLIDES = 'slides.com';
  var EMBED = '/embed';
  var body = block.body.replace(/\n/g, '');
  var isSlides = body.indexOf(SLIDES) !== -1;
  var link = body.concat(isSlides ? EMBED : '');

  var helpbar = isSlides ? '' : '<div class="integrate-slides__bar"><a target="_blank"' +
    'class="integrate-slides__full" href="' + link + '">' + Icon +'</a></div>';
  var iframeClasses = 'integrate-slides__iframe'.concat(isSlides ? '' : ' integrate-slides__iframe--with-bar');

  return '<div class="integrate-slides__container"><iframe class="' + iframeClasses + '" src=' + link +
    ' scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' + helpbar;
}

module.exports = {
  book: {
    assets: './assets',
    css: ['slides.css'],
    js: ['slides.js']
  },
  blocks: {
    slides: {
      parse: false,
      process: renderBlock
    }
  }
};
