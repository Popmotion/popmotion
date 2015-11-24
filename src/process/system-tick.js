const hasRAF = (typeof window !== 'undefined' && window.requestAnimationFrame) ? true : false;

let tick;

if (hasRAF) {
    tick = window.requestAnimationFrame;

} else {
    /*
        requestAnimationFrame polyfill
        
        For IE8/9 Flinstones

        Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
        
        http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
         
        requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
         
        MIT license
    */
    let lastTime = 0;

    tick = (callback) => {
        const currentTime = new Date().getTime();
        const timeToCall = Math.max(0, 16 - (currentTime - lastTime));

        lastTime = currentTime + timeToCall;

        setTimeout(() => callback(lastTime), timeToCall);
    }
}

module.exports = tick;