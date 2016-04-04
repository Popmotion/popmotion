'use strict';

exports.__esModule = true;

var _typeKeys = require('./type-keys');

var types = [_typeKeys.POSITION, _typeKeys.SCALE, _typeKeys.ROTATION];
var dimensions = ['X', 'Y', 'Z'];
var dictionary = {};

types.forEach(function (type) {
    return dimensions.forEach(function (dimension, i) {
        return dictionary['' + type + dimension] = {
            prop: type,
            position: i,
            unit: dimension.toLowerCase()
        };
    });
});

exports.default = dictionary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvZGljdGlvbmFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFNLEtBQUssR0FBRyx5REFBMkIsQ0FBQztBQUMxQyxJQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUV0QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtXQUFLLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTLEVBQUUsQ0FBQztlQUFLLFVBQVUsTUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFHLEdBQUc7QUFDN0YsZ0JBQUksRUFBRSxJQUFJO0FBQ1Ysb0JBQVEsRUFBRSxDQUFDO0FBQ1gsZ0JBQUksRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFO1NBQ2hDO0tBQUEsQ0FBQztDQUFBLENBQUMsQ0FBQzs7a0JBRVcsVUFBVSIsImZpbGUiOiJkaWN0aW9uYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUE9TSVRJT04sIFNDQUxFLCBST1RBVElPTiB9IGZyb20gJy4vdHlwZS1rZXlzJztcblxuY29uc3QgdHlwZXMgPSBbUE9TSVRJT04sIFNDQUxFLCBST1RBVElPTl07XG5jb25zdCBkaW1lbnNpb25zID0gWydYJywgJ1knLCAnWiddO1xuY29uc3QgZGljdGlvbmFyeSA9IHt9O1xuXG50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiBkaW1lbnNpb25zLmZvckVhY2goKGRpbWVuc2lvbiwgaSkgPT4gZGljdGlvbmFyeVtgJHt0eXBlfSR7ZGltZW5zaW9ufWBdID0ge1xuICAgIHByb3A6IHR5cGUsXG4gICAgcG9zaXRpb246IGksXG4gICAgdW5pdDogZGltZW5zaW9uLnRvTG93ZXJDYXNlKClcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZGljdGlvbmFyeTsiXX0=