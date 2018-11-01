---
title: Posed
description: Create a posed component
category: react
---

# posed

`posed` is used to create animated and interactive components that you can reuse throughout your React site.

<TOC />

## Import

```javascript
import posed from 'react-pose'
```

## Usage

### Create a posed component

`posed` can be used to create posed components in two ways:

- **Recommended:** Create HTML & SVG elements (eg `posed.div`)
- **Advanced:** Convert existing components (eg `posed(Component)`)

#### HTML & SVG elements

`pose` isn't called directly, instead we pass [a pose config object](/pose/api/react-config) to `posed.div`, `posed.button` etc. Every HTML and SVG element is supported:

```javascript
const DraggableCircle = posed.circle({
  draggable: 'x',
  dragBounds: { left: 0, right: 100 }
})

export default ({ radius }) => <DraggableCircle r={radius} />
```

#### Existing components

Existing components can be converted to posed components by calling `posed` directly:

```javascript
const PosedComponent = posed(MyComponent)(poseProps)
```

For performance and layout calculations, React Pose requires a reference to the underlying DOM element. So, the component to be animated **must pass forward a ref using the `React.forwardRef` function**:

```javascript
const MyComponent = forwardRef((props, ref) => (
  <div ref={ref} {...props} />
));

const PosedComponent = posed(MyComponent)({
  draggable: true
});

export default () => <PosedComponent pose={isOpen ? 'open' : 'closed'} />
```

Many CSS-in-JS libraries like Styled Components will automatically do this for you.

For FLIP support in a `PoseGroup` component, it **optionally** needs to pass on the `style` prop:

```javascript
const MyComponent = forwardRef(({ style }, ref) => (
  <div ref={ref} style={style} />
));
```

### Set a pose

Poses can be set via the `pose` property. This can either be a string, or an array of strings to reference multiple poses:

```javascript
const Sidebar = posed.nav({
  open: { x: '0%' },
  closed: { x: '-100%' }
})

export default ({ isOpen }) => <Sidebar pose={isOpen ? 'open' : 'closed'} />
```

### Children

Using a posed component creates a new tree of posed components. Any children that are also posed components are automatically added to this tree.

This means that orchestrating animations through React trees becomes trivial, as a pose only has to be set on a parent. Any children with that pose defined will also animate:

```javascript
const Sidebar = posed.nav({
  open: { x: '0%', staggerChildren: 100 },
  closed: { x: '-100%' }
})

const NavItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 }
})

export default ({ isOpen, navItems }) => (
  <Sidebar pose={isOpen ? 'open' : 'closed'}>
    <ul>
      {navItems.map(({ url, name }) => (
        <NavItem>
          <a href={url}>{name}</a>
        </NavItem>
      ))}
    </ul>
  </Sidebar>
)
```

<CodePen id="MVQepE" />

In tandem with the [`PoseGroup`](/pose/api/posegroup) component, this capability can be used to orchestrate sophisticated `enter` and `exit` animations.

This behaviour can be overridden by passing `newTree` to a posed component, which will ignore any parent posed components and create a new tree.

### Styling

Posed components are normal components, so they can be used with any CSS styling solution. For instance:

#### Styled Components

```javascript
const sidebarProps = {
  open: { x: '0%' },
  closed: { x: '-100%' }
}

const Sidebar = styled(posed.nav(sidebarProps))`
```

#### className

```javascript
() => <Sidebar pose="closed" className="my-class" />
```

## Props

### pose

`pose?: string | string[]`

The name or names of the current pose.

### initialPose

`initialPose?: string | string[]`

The name of one or more poses to set to before the component mounts. Once the component mounts, it will transition from this pose into `pose`.

### poseKey

`poseKey?: string | number`

If `poseKey` changes, it'll force the posed component to transition to the current `pose`, even if it hasn't changed.

This won't be required for the majority of use-cases. But we might have something like a paginated where we pass the x offset to the component but the pose itself doesn't change:

```javascript
const Slider = posed.div({
  nextItem: {
    x: ({ target }) => target
  }
})

({ target }) => <Slider pose="nextItem" poseKey={target} target={target} />
```

### withParent

`withParent?: boolean = true`

If set to `false`, this component won't subscribe to its parent posed component and create root for any further child components.

### onPoseComplete

`onPoseComplete?: Function`

A callback that fires whenever a pose has finished transitioning.

### onValueChange

`onValueChange?: { [key: string]: any }`

`onValueChange` is a map of functions, each corresponding to a value being animated by the posed component and will fire when that value changes.

### onDragStart/onDragEnd

`onDragStart/onDragEnd: (e: Event) => void`

Callbacks that fire when dragging starts or ends. **Note:** These props are immutable and can't be changed after mounting.

### onPressStart/onPressEnd

`onPressStart/onPressEnd: (e: Event) => void`

Callbacks that fire when pressing starts or ends. **Note:** These props are immutable and can't be changed after mounting.

### ref

`ref?: RefObject | (ref: Element) => void`

An optional ref property. If a function, will call with the posed DOM element when it mounts, and `null` when it unmounts.

Alternatively, it can be passed a ref object (created from `React.createRef`).

### values/parentValues

`values?: { [key: string]: Value }`

Normally, Pose generates [Popmotion `value`](/api/value) for each animating property. It then passes these down to any posed children so `passive` values can link to them.

Novel hierarchies, where the posed tree and the React component tree diverge, can be achieved by creating your own values map, and passing that to a single posed component.

This same map can then be passed to multiple other posed component's `parentValues` property in order to establish a parent-children relationship even between sibling components.

<CodePen id="xWrbNm" />

### ...props

`...props: { [key: string]: any }`

When a new pose is entered, any remaining props set on a component will be used to resolve that pose's dynamic props:

```javascript
const Component = posed.div({
  visible: { opacity: 1, y: 0 },
  hidden: {
    opacity: 0,
    y: ({ i }) => i * 50
  }
})

// Later
({ isVisibile, i }) => (
  <Component pose={isVisible ? 'visible' : 'hidden'} i={i} />
)
```
