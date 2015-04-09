"use strict";

var defsWrapper,

    createFilterWrapper = function () {
        var svgWrapper = document.createElement('svg');
        
        svgWrapper.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgWrapper.setAttribute('version', '1.1');
        svgWrapper.setAttribute('class', 'redshift-filters');
            
        svgWrapper.innerHTML = '<def></def>';
        
        defsWrapper = svgWrapper.firstChild;
        
        document.body.insertBefore(svgWrapper, document.body.firstChild); 
    },
    
    addNewFilter = function (id) {
        var newFilter = document.createElement('filter'),
            filterTag = ;
        
        newFilter.setAttribute('id', id);
        
        newFilter.innerHTML = '<feGaussianBlur in="SourceGraphic" stdDeviation="0,0" />';
        
        defsWrapper.appendChild(newFilter);
    };

module.exports = {
};