/* global CONFIG, gio */

if (!window.gio) {
  window.gio = function() {
    (window.gio.q = window.gio.q || []).push(arguments);
  };
}

gio('init', `${CONFIG.growingio_analytics}`, {});
gio('send');
