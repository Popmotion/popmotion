

### `blendColor`
Given two colors, returns a function that takes a progress value (0 - 1); and returns a correctly blended color.

Watch [Computer Color is Broken](https:// www.youtube.com/watch?v=LKnqECcg6Gw) for more information.

`blendColor(colorA <String | Object>, colorB <String | Object>)`

```javascript
const blendRedToBlue = blendColor('#f00', '#00f');
blendRedToBlue(0.5); // Returns blended object with rgba properties
```
