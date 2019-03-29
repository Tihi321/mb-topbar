const wpPot = require('wp-pot');

wpPot({
  destFile: 'languages/mp-topbar_php.pot',
  domain: 'mb-topbar',
  package: 'Mb Topbar',
  src: ['templates/**/*.php', 'inc/**/*.php'],
});
