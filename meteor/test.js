'use strict';

Tinytest.add('ui.is', function (test) {
  var actor = new ui.Actor();
  test.instanceOf(actor, ui.Actor, 'Instantiation OK');
});
