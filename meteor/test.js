'use strict';

Tinytest.add('ui.is', function (test) {
    var actor = new ui.Actor();
    var tween = new ui.Tween({
        values: {
            test: 100
        }
    });

    actor.start(tween);
    test.instanceOf(actor, ui.Actor, 'Instantiation OK');
});
