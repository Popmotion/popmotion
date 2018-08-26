---
title: "Use Pose in Framer X (WIP)"
description: Add declarative animations to your Framer X prototypes
category: how-to
---

# Use Pose in Framer X (WIP)

Framer X beta invites are going out and it's already possible to use Pose in Framer X prototypes.

It's early days at the moment so integration isn't seamless but it's already possible to add UI events like `drag`, `hover` and `press`.

You can also already use Framer X to test animations by exposing pose logic via the UI.

But there are currently limitations, and we'll take a look at those, too.

<TOC />

## Install Pose

First we need to add Pose to our Framer project.

With our project open in Framer X, go to File > Show Project Folder.

![Framer X Show Project](/static/guides/framer-x-show-project.png)

You should have the `container` folder highlighted. Open this folder in your terminal of choice.

> If you're using VS Code, drag and drop the highlighted folder onto the VS Code dock icon. Then, in VS Code's file browser, right click in the project root and choose "Open in Terminal".

This folder is a typical yarn package, so you can add Pose by running `yarn add react-pose`.

The current limitation with this process is you have to repeat it for every project you want to use Pose in. I'm also unclear as to whether yarn dependencies are saved to the project file itself, as `Show Project Folder` opens a directory in the app cache.

## Create a posed Framer component

At the bottom of the Framer X Component panel, there's a button labelled "New Component". Click that, give your component a name, choose "from code" and press "Create and edit".

![Create a new component](/static/guides/framer-x-create-component.png)

You'll be greeted with a TypeScript file containing some simple React code.

The only Framer X-specific code in here is a static property called `propertyControls`, which we'll explore in a moment.

First, import Pose and make a simple hoverable component:

```javascript
import posed from 'react-pose';

const Container = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 }
});
```

Replace the render function with the following:

```javascript
return <Container style={style}>{this.props.text}</Container>;
```

Save, and return to the Framer X editor.

In the components panel you'll see your new component. You can add this to the Framer X editor by dragging and dropping it in place.

Click the play icon in the top and hover over your new component. It'll react to your hovering as expected.

## Expose pose controls

Go back to your editor and highlight your component. Notice in the right-hand inspector there's a section named after your component with a text input labelled "Text". If you replace "Hello world!", your component will update with the input text.

Go to the source code of your component and take a look at the `render` function. It's outputting `this.props.text`.

Now look at `propertyControls`. It has a single property, `text`, with a title of "Text". This is how you expose control over `props` via the Framer X UI.

We're going to use this to control Pose animations.

First, cmd-click on `propertyControls`' `PropertyControls` type. This will take you through to its type definition, and we can take a look at some of the control types available to us.

Let's use a simple control, a `Boolean`. Add this to `propertyControls`:

```javascript
isVisible: {
  type: ControlType.Boolean,
  title: "Is visible"
}
```

We also need to add a default for this property to `defaultProps`:

```javascript
static defaultProps = {
  text: "Hello World!",
  isVisible: false
};
```

And a type for the property to the `Props` interface:

```javascript
interface Props {
  text: string;
  isVisible: boolean;
}
```

Now, this control will be available to use in the inspector panel.

But we still need to wire it up.
