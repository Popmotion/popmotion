# Popmotion React

```javascript
const MyComponent = () => (
  <PopmotionValue
    state="rest"
    onStateChange={{
      isDragging: (value) => ,
      rest: (value) => 
    }}
  >
  {({ v,  }) => (
    <div style={{ transform: `translateX(${v}px)` }} />
  )}
  </PopmotionValue>
);
```
