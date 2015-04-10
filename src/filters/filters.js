"use strict";

var blur = require('./blur.js'),

    svgAddress = "http://www.w3.org/2000/svg",
    filterIdPrefix = 'redshift-filters',
    filterCounter = 0,
    filterNodes = {},
    filters = {},
    
    filterContainer,
    
    generateFilterContainer = function () {
        var svgWrapper = document.createElementNS(svgAddress, 'svg'),
            def = document.createElementNS(svgAddress, 'def');

        svgWrapper.setAttribute('class', filterIdPrefix);
        svgWrapper.style.width = '0';
        svgWrapper.style.height = '0';
        svgWrapper.style.overflow = 'hidden';
            
        svgWrapper.appendChild(def);
        
        document.body.insertBefore(svgWrapper, document.body.firstChild);
        
        return def;
    },
    
    generateFilter = function (type) {
        // Generate SVG and defs tags if not present
        if (!filterContainer) {
            filterContainer = generateFilterContainer();
        }
        
        // Generate filter tag if not defined
        if (!filterNodes[type]) {
            filterNodes[type] = generateFilterNode(type);
        }
        
        return filterNodes[type].cloneNode(true);
    },
    
    generateFilterNode = function (type) {
        var filter = document.createElementNS(svgAddress, 'filter'),
            blur = document.createElementNS(svgAddress, 'feGaussianBlur');
            
        blur.setAttribute('in', 'SourceGraphic');
        blur.setAttribute('stdDeviation', '0,0');
            
        filter.appendChild(blur);
        
        return filter;
    },
    
    /*
        Get new filter ID and increment counter
        
        @return [string]: New filter ID
    */
    getFilterId = function () {
        var filterId = filterIdPrefix + filterCounter;
        
        filterCounter++;
        
        return filterId;
    };

module.exports = {
    
    /*
        Apply filter to DOM
    */
    apply: function (action, values, props) {
        var filter;
        
        // Generate a filter if none exists  - move this to movement start
        if (!props.filterId) {
            props.filterId = getFilterId();
            
            // Generate filter
            filter = generateFilter('motionBlur');
            
            filter.setAttribute('id', props.filterId);
            
            // Add filter to svg tag
            filterContainer.appendChild(filter);

            // Apply filter as CSS rule
            action.style({
                filter: 'url("#' + props.filterId + '")'
            });
            
            filters[props.filterId] = filter;
        }
    },
    
    
    update: function (action, values, props) {
        var link = props.motionBlur,
            velocity = values[link].velocity,
            strength = props.motionBlurStrength || 1,
            filter = filters[props.filterId],
            isX = (props.motionBlurAxis === 'x'),
            amount = velocity * strength,
            blur = {
                x: isX ? amount : 0,
                y: isX ? 0 : amount
            };
        
        filter.setAttribute('stdDeviation', blur.x + ',' + blur.y);
    },
    
    remove: function (action) {
        var filterId = action.props('filterId'),
            filter = document.getElementById(filterId);

        if (filter) {
            delete filters[filterId];
            document.body.removeChild(filter);
        }
    }
    
};