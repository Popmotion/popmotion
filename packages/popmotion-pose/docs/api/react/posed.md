---
title: Posed component
description: Create a posed component
category: react
---

**Note:** React Pose **requires** React 16.3.0.

# `posed`

`posed` is used to create animated and interactive components that you can reuse throughout your React site.

## Install

```bash
npm install react-pose --save
```

## Import

```javascript
import posed from 'react-pose'
```

## Usage

### Create a posed component

`pose` isn't called directly, instead we pass [posed props](/pose/api/props) to `posed.div`, `posed.button` etc. Every HTML and SVG element is supported:

```javascript
const DraggableCircle = posed.circle({
  draggable: 'x',
  dragBounds: { left: 0, right: 100 }
})

export default ({ radius }) => <DraggableCircle r={radius} />
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
  width: 300px;
  background: red;
`;
```

#### `className`

```javascript
() => <Sidebar pose="closed" className="my-class" />
```

## Props

### `pose?: string | string[]`

The name or names of the current pose.

### `withParent?: boolean = true`

If set to `false`, this component won't subscribe to its parent posed component and create root for any further child components.

### `onChange?: { [key: string]: any }`

`onChange` is a map of functions, each corresponding to a value being animated by the posed component and will fire when that value changes.

### `...props: { [key: string]: any }`

Remaining props will be provided to a pose's `transition` function when that pose is entered.
