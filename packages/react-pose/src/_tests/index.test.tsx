import React from 'react';
import posed from '../posed';
import PoseGroup from '../components/Transition/PoseGroup';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });

const Parent = posed.div({
  init: { x: 10, transition: { duration: 30 } },
  foo: { x: 20, transition: { duration: 30 } },
  bar: { x: 30, transition: { duration: 30 } },
  fromProps: { x: ({ i }) => i, transition: { duration: 30 } },
  preEnter: { x: 40, transition: { duration: 30 } },
  enter: { x: 50, transition: { duration: 30 } },
  exit: { x: 60, transition: { duration: 30 } },
  dynamicEnter: { x: ({ x }) => x * 2, transition: { duration: 30 } },
  dynamicExit: {
    x: ({ x }) => x,
    transition: { duration: 30 }
  }
});
const Child = posed.div({
  init: { y: 15, transition: { duration: 30 } },
  foo: { y: 25, transition: { duration: 30 } },
  bar: { y: 35, transition: { duration: 30 } },
  fromProps: { y: ({ i }) => i, transition: { duration: 30 } },
  preEnter: { y: 45, transition: { duration: 30 } },
  enter: { y: 55, transition: { duration: 30 } },
  exit: { y: 65, transition: { duration: 30 } },
  dynamicEnter: { y: 75, transition: { duration: 30 } },
  dynamicExit: { y: 85, transition: { duration: 30 } }
});

test('posed: initial state', () => {
  let x = 0;
  let y = 0;

  const namedInit = mount(
    <Parent pose="foo" onValueChange={{ x: v => (x = v) }}>
      <Child onValueChange={{ y: v => (y = v) }} />
    </Parent>
  );

  expect(namedInit.props().pose).toBe('foo');
  expect(x).toBe(20);
  expect(y).toBe(25);

  mount(
    <Parent onValueChange={{ x: v => (x = v) }}>
      <Child onValueChange={{ y: v => (y = v) }} />
    </Parent>
  );

  expect(x).toBe(10);
  expect(y).toBe(15);
});

test('posed: mount animation with `initialPose`', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    mount(
      <Parent
        initialPose="bar"
        pose="foo"
        onPoseComplete={() => {
          expect(x).toBe(20);
          expect(y).toBe(25);
          resolve();
        }}
        onValueChange={{ x: v => (x = v) }}
      >
        <Child onValueChange={{ y: v => (y = v) }} />
      </Parent>
    );

    expect(x).toBe(30);
    expect(y).toBe(35);
  });
});

test('posed: passes through props', () => {
  let x = 0;
  let y = 0;

  mount(
    <Parent pose="fromProps" i={1} onValueChange={{ x: v => (x = v) }}>
      <Child i={2} onValueChange={{ y: v => (y = v) }} />
    </Parent>
  );

  expect(x).toBe(1);
  expect(y).toBe(2);
});

test('posed: `onPoseComplete` gets called with pose as argument', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    mount(
      <Parent
        initialPose="bar"
        pose="foo"
        onPoseComplete={pose => {
          expect(pose).toBe('foo');
          resolve();
        }}
      />
    );
  });
});

test('PoseGroup: Initial visibility (visible)', () => {
  let x = 0;
  let y = 0;

  const Group = ({ isVisible = true }) => (
    <PoseGroup>
      {isVisible && (
        <Parent key="a" onValueChange={{ x: v => (x = v) }}>
          <Child onValueChange={{ y: v => (y = v) }} />
        </Parent>
      )}
    </PoseGroup>
  );

  mount(<Group />);

  expect(x).toBe(50);
  expect(y).toBe(55);
});

test('PoseGroup: Initial visibility (hidden)', () => {
  let x = 0;
  let y = 0;

  const Group = ({ isVisible = false }) => (
    <PoseGroup>
      {isVisible && (
        <Parent key="a" onValueChange={{ x: v => (x = v) }}>
          <Child onValueChange={{ y: v => (y = v) }} />
        </Parent>
      )}
    </PoseGroup>
  );

  mount(<Group />);

  expect(x).toBe(0);
  expect(y).toBe(0);
});

test('PoseGroup: Animate on mount', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    const Group = ({ isVisible = true }) => (
      <PoseGroup animateOnMount>
        {isVisible && (
          <Parent
            key="a"
            onPoseComplete={() => {
              expect(x).toBe(50);
              expect(y).toBe(55);
              resolve();
            }}
            onValueChange={{ x: v => (x = v) }}
          >
            <Child onValueChange={{ y: v => (y = v) }} />
          </Parent>
        )}
      </PoseGroup>
    );

    mount(<Group />);

    expect(x).toBe(60);
    expect(y).toBe(65);
  });
});

test('PoseGroup: onRest fires', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    const Group = ({ isVisible = true }) => (
      <PoseGroup
        onRest={() => {
          expect(x).toBe(60);
          expect(y).toBe(65);
          resolve();
        }}
      >
        {isVisible && (
          <Parent key="a" onValueChange={{ x: v => (x = v) }}>
            <Child onValueChange={{ y: v => (y = v) }} />
          </Parent>
        )}
      </PoseGroup>
    );

    const wrapper = mount(<Group />);

    wrapper.setProps({ isVisible: false });

    expect(x).toBe(50);
    expect(y).toBe(55);
  });
});

test('PoseGroup: Animate conditionally', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    const Group = ({ isVisible = false }) => (
      <PoseGroup animateOnMount>
        {isVisible && (
          <Parent
            key="a"
            onPoseComplete={() => {
              expect(x).toBe(50);
              expect(y).toBe(55);
              resolve();
            }}
            onValueChange={{ x: v => (x = v) }}
          >
            <Child onValueChange={{ y: v => (y = v) }} />
          </Parent>
        )}
      </PoseGroup>
    );

    const wrapper = mount(<Group />);

    expect(x).toBe(0);
    expect(y).toBe(0);

    wrapper.setProps({ isVisible: true });
    expect(x).toBe(60);
    expect(y).toBe(65);
  });
});

test('PoseGroup: Forward props from PoseGroup to direct child', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    const Group = ({ isVisible = false }) => (
      <PoseGroup
        animateOnMount
        enterPose="dynamicEnter"
        exitPose="dynamicExit"
        preEnterPose="dynamicExit"
        x={100}
      >
        {isVisible && (
          <Parent
            key="a"
            onPoseComplete={() => {
              expect(x).toBe(200);
              expect(y).toBe(75);
              resolve();
            }}
            onValueChange={{ x: v => (x = v) }}
          >
            <Child onValueChange={{ y: v => (y = v) }} />
          </Parent>
        )}
      </PoseGroup>
    );

    const wrapper = mount(<Group />);

    expect(x).toBe(0);
    expect(y).toBe(0);

    wrapper.setProps({ isVisible: true });
    expect(x).toBe(100);
    expect(y).toBe(85);
  });
});

test('PoseGroup: Override props on child', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    const Group = ({ isVisible = false }) => (
      <PoseGroup
        animateOnMount
        enterPose="dynamicEnter"
        exitPose="dynamicExit"
        preEnterPose="dynamicExit"
        x={isVisible ? 101 : 333}
      >
        {isVisible && (
          <Parent
            key="a"
            onPoseComplete={pose => {
              if (pose === 'dynamicExit') {
                expect(x).toBe(333);
                expect(y).toBe(85);

                resolve();
              } else {
                expect(x).toBe(202);
                expect(y).toBe(75);
                wrapper.setProps({ isVisible: false });
              }
            }}
            onValueChange={{ x: v => (x = v) }}
          >
            <Child onValueChange={{ y: v => (y = v) }} />
          </Parent>
        )}
      </PoseGroup>
    );

    const wrapper = mount(<Group />);

    expect(x).toBe(0);
    expect(y).toBe(0);

    wrapper.setProps({ isVisible: true });
    expect(x).toBe(101);
    expect(y).toBe(85);
  });
});

test('PoseGroup: Provides group props to children on mount', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    const Group = ({ isVisible = false }) => (
      <PoseGroup
        animateOnMount
        someProp="value"
      >
        <Parent
          key="a"
          onPoseComplete={pose => {
            const child = wrapper.children().first()
            expect(child.prop('someProp')).toBe('value')
            resolve();
          }}
        >
          <Child test={2}/>
        </Parent>
      </PoseGroup>
    );

    const wrapper = mount(<Group />);
  });
});

test('PoseGroup: `onPoseComplete` gets called for leaving child', () => {
  return new Promise(resolve => {
    const Group = ({ isVisible = true }) => (
      <PoseGroup animateOnMount>
        {isVisible && (
          <Parent
            key="a"
            onPoseComplete={pose => {
              if (pose === 'enter') {
                wrapper.setProps({ isVisible: false });
                return
              }

              expect(pose).toBe('exit');
              resolve();
            }}
          >
            <Child />
          </Parent>
        )}
      </PoseGroup>
    );

    const wrapper = mount(<Group />);
  });
});

test('PoseGroup: special pre-enter pose', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    const Group = ({ isVisible = false }) => (
      <PoseGroup animateOnMount preEnterPose="foo">
        {isVisible && (
          <Parent
            key="a"
            onPoseComplete={() => {
              expect(x).toBe(50);
              expect(y).toBe(55);
              resolve();
            }}
            onValueChange={{ x: v => (x = v) }}
          >
            <Child onValueChange={{ y: v => (y = v) }} />
          </Parent>
        )}
      </PoseGroup>
    );

    const wrapper = mount(<Group />);

    expect(x).toBe(0);
    expect(y).toBe(0);

    wrapper.setProps({ isVisible: true });
    expect(x).toBe(20);
    expect(y).toBe(25);
  });
});
