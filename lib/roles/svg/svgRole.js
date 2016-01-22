"use strict";

var Role = require('../Role'),
    attrRole = require('../attr/attrRole'),
    build = require('./build'),
    each = require('../../inc/utils').each;

module.exports = new Role({
    _map: require('../css/map'),
    _typeMap: require('./type-map'),

    start: function () {
        var boundingBox = this.element.getBBox(),
            values = this.values,

        // TODO: Support px
        transformOriginX = values.transformOriginX ? values.transformOriginX.current : 50,
            transformOriginY = values.transformOriginY ? values.transformOriginY.current : 50,
            origin = {
            x: boundingBox.width * (transformOriginX / 100) + boundingBox.x,
            y: boundingBox.height * (transformOriginY / 100) + boundingBox.y
        };

        this.svgOrigin = origin;
    },

    update: function (state) {
        var actor = this;
        each(build(state, this.svgOrigin), function (key, value) {
            attrRole.set(actor.element, key, value);
        });
    }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9zdmcvc3ZnUm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLE9BQU8sUUFBUSxTQUFSLENBQVA7SUFDQSxXQUFXLFFBQVEsa0JBQVIsQ0FBWDtJQUNBLFFBQVEsUUFBUSxTQUFSLENBQVI7SUFDQSxPQUFPLFFBQVEsaUJBQVIsRUFBMkIsSUFBM0I7O0FBRVgsT0FBTyxPQUFQLEdBQWlCLElBQUksSUFBSixDQUFTO0FBQ3RCLFVBQU0sUUFBUSxZQUFSLENBQU47QUFDQSxjQUFVLFFBQVEsWUFBUixDQUFWOztBQUVBLFdBQU8sWUFBWTtBQUNmLFlBQUksY0FBYyxLQUFLLE9BQUwsQ0FBYSxPQUFiLEVBQWQ7WUFDQSxTQUFTLEtBQUssTUFBTDs7O0FBRVQsMkJBQW1CLE9BQU8sZ0JBQVAsR0FBMEIsT0FBTyxnQkFBUCxDQUF3QixPQUF4QixHQUFrQyxFQUE1RDtZQUNuQixtQkFBbUIsT0FBTyxnQkFBUCxHQUEwQixPQUFPLGdCQUFQLENBQXdCLE9BQXhCLEdBQWtDLEVBQTVEO1lBQ25CLFNBQVM7QUFDTCxlQUFHLFlBQVksS0FBWixJQUFxQixtQkFBbUIsR0FBbkIsQ0FBckIsR0FBK0MsWUFBWSxDQUFaO0FBQ2xELGVBQUcsWUFBWSxNQUFaLElBQXNCLG1CQUFtQixHQUFuQixDQUF0QixHQUFnRCxZQUFZLENBQVo7U0FGdkQsQ0FOVzs7QUFXZixhQUFLLFNBQUwsR0FBaUIsTUFBakIsQ0FYZTtLQUFaOztBQWNQLFlBQVEsVUFBVSxLQUFWLEVBQWlCO0FBQ3JCLFlBQUksUUFBUSxJQUFSLENBRGlCO0FBRXJCLGFBQUssTUFBTSxLQUFOLEVBQWEsS0FBSyxTQUFMLENBQWxCLEVBQW1DLFVBQVUsR0FBVixFQUFlLEtBQWYsRUFBc0I7QUFDckQscUJBQVMsR0FBVCxDQUFhLE1BQU0sT0FBTixFQUFlLEdBQTVCLEVBQWlDLEtBQWpDLEVBRHFEO1NBQXRCLENBQW5DLENBRnFCO0tBQWpCOztDQWxCSyxDQUFqQiIsImZpbGUiOiJzdmdSb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpLFxuICAgIGF0dHJSb2xlID0gcmVxdWlyZSgnLi4vYXR0ci9hdHRyUm9sZScpLFxuICAgIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpLFxuICAgIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBSb2xlKHtcbiAgICBfbWFwOiByZXF1aXJlKCcuLi9jc3MvbWFwJyksXG4gICAgX3R5cGVNYXA6IHJlcXVpcmUoJy4vdHlwZS1tYXAnKSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBib3VuZGluZ0JveCA9IHRoaXMuZWxlbWVudC5nZXRCQm94KCksXG4gICAgICAgICAgICB2YWx1ZXMgPSB0aGlzLnZhbHVlcyxcbiAgICAgICAgICAgIC8vIFRPRE86IFN1cHBvcnQgcHhcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWCA/IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YLmN1cnJlbnQgOiA1MCxcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWSA/IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZLmN1cnJlbnQgOiA1MCxcbiAgICAgICAgICAgIG9yaWdpbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBib3VuZGluZ0JveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJvdW5kaW5nQm94LngsXG4gICAgICAgICAgICAgICAgeTogYm91bmRpbmdCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYm91bmRpbmdCb3gueVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN2Z09yaWdpbiA9IG9yaWdpbjtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcbiAgICAgICAgZWFjaChidWlsZChzdGF0ZSwgdGhpcy5zdmdPcmlnaW4pLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYXR0clJvbGUuc2V0KGFjdG9yLmVsZW1lbnQsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pOyJdfQ==