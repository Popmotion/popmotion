import React, { forwardRef } from 'react';
import posed from '../posed';
import PoseGroup from '../components/Transition/PoseGroup';
import { render, cleanup } from 'react-testing-library';

afterEach(cleanup);

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
  dynamicExit: { y: 85, transition: { duration: 30 } },
  dynamicExitDuration: {
    y: 85,
    transition: ({ i }) => ({ duration: (i + 1) * 30 })
  }
});

test('posed: initial state - named initial pose', () => {
  let x = 0;
  let y = 0;

  render(
    <Parent pose="foo" onValueChange={{ x: v => (x = v) }}>
      <Child onValueChange={{ y: v => (y = v) }} />
    </Parent>
  );

  expect(x).toBe(20);
  expect(y).toBe(25);
});

test('posed: initial state - auto `init` pose', () => {
  let x = 0;
  let y = 0;

  render(
    <Parent onValueChange={{ x: v => (x = v) }}>
      <Child onValueChange={{ y: v => (y = v) }} />
    </Parent>
  );

  expect(x).toBe(10);
  expect(y).toBe(15);
});

test('posed: nested poses get merged together', () => {
  let parentX = 0;
  let childX = 0;
  let childY = 0;

  const Parent = posed.div({
    foo: { x: 20, transition: { duration: 30 } }
  });

  const Child = posed.div({
    foo: { x: 10, transition: { duration: 30 } },
    bar: { y: 30, transition: { duration: 30 } }
  });

  render(
    <Parent pose="foo" onValueChange={{ x: v => (parentX = v) }}>
      <Child
        pose="bar"
        onValueChange={{ x: v => (childX = v), y: v => (childY = v) }}
      />
    </Parent>
  );

  expect(parentX).toBe(20);
  expect(childX).toBe(10);
  expect(childY).toBe(30);
});

test('posed: mount animation with `initialPose`', () => {
  let x = 0;
  let y = 0;

  return new Promise(resolve => {
    render(
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

  render(
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
    render(
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

  render(<Group />);

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

  render(<Group />);

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

    render(<Group />);

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

    const { rerender } = render(<Group />);

    rerender(<Group isVisible={false} />);

    expect(x).toBe(50);
    expect(y).toBe(55);
  });
});

test('PoseGroup: onRest fires when exit pose starts during exit pose', () => {
  const range = n => Array.from({ length: n }, (_, i) => i);

  return new Promise(resolve => {
    class Group extends React.Component {
      state = {
        list: range(6)
      };

      componentDidMount() {
        this.pop2();
      }

      pop2 = () => {
        const { list } = this.state;

        if (!list.length) {
          return;
        }

        this.setState({ list: list.slice(0, -2) });
      };

      render() {
        return (
          <PoseGroup exitPose="dynamicExitDuration" onRest={resolve}>
            {this.state.list.map(i => (
              <Child i={i} key={i} onPoseComplete={this.pop2} />
            ))}
          </PoseGroup>
        );
      }
    }

    const wrapper = render(<Group />);
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

    const { rerender } = render(<Group />);

    expect(x).toBe(0);
    expect(y).toBe(0);

    rerender(<Group isVisible />);
    expect(x).toBe(60);
    expect(y).toBe(65);
  });
});

test('PoseGroup: All remaining children have a flip transition when one is removed', () => {
  const items = [1, 2, 3, 4, 5, 6];
  let nbEnterPoseCompleted = 0;
  let flipTransitions = [];
  return new Promise(resolve => {
    const Group = ({ items }) => (
      <PoseGroup>
        {items.map((item, i) => (
          <Parent
            key={item}
            onPoseComplete={poses => {
              if (poses.includes('enter')) {
                flipTransitions[i] = poses.includes('flip');
                nbEnterPoseCompleted += 1;
                if (nbEnterPoseCompleted === items.length) {
                  expect(flipTransitions).toEqual([
                    true,
                    true,
                    true,
                    true,
                    true
                  ]);
                  resolve();
                }
              }
            }}
          />
        ))}
      </PoseGroup>
    );

    const { rerender } = render(<Group items={items} />);
    expect(flipTransitions).toEqual([]);

    rerender(<Group items={[...items.slice(0, 2), ...items.slice(3)]} />);
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

    const { rerender } = render(<Group />);

    expect(x).toBe(0);
    expect(y).toBe(0);

    rerender(<Group isVisible />);
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
                rerender(<Group isVisible={false} />);
              }
            }}
            onValueChange={{ x: v => (x = v) }}
          >
            <Child onValueChange={{ y: v => (y = v) }} />
          </Parent>
        )}
      </PoseGroup>
    );

    const { rerender } = render(<Group />);

    expect(x).toBe(0);
    expect(y).toBe(0);

    rerender(<Group isVisible />);
    expect(x).toBe(101);
    expect(y).toBe(85);
  });
});

test('PoseGroup: Provides group props to children on mount', () => {
  let x = 0;
  let y = 0;

  const ChildWithGroupProps = posed(
    forwardRef(({ text, ...props }, innerRef) => (
      <div ref={innerRef} {...props}>{`text: ${text}`}</div>
    ))
  )({});

  const Group = () => (
    <PoseGroup animateOnMount text="foo bar">
      <ChildWithGroupProps data-testid="child" key="a" />
    </PoseGroup>
  );

  const { getByTestId, debug } = render(<Group />);
  const child = getByTestId('child');
  expect(child.textContent).toBe('text: foo bar');
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
                rerender(<Group isVisible={false} />);
                return;
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

    const { rerender } = render(<Group />);
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

    const { rerender } = render(<Group />);

    expect(x).toBe(0);
    expect(y).toBe(0);

    rerender(<Group isVisible />);
    expect(x).toBe(20);
    expect(y).toBe(25);
  });
});

test('StrictMode: PoseGroup removes children correctly', () => {
  return new Promise(resolve => {
    const First = posed.div({
      enter: { opacity: 1 },
      exit: { opacity: 0 }
    });

    const Second = posed.div({
      enter: { opacity: 1 },
      exit: { opacity: 0 }
    });

    const Group = props => (
      <React.StrictMode>
        <PoseGroup {...props} />
      </React.StrictMode>
    );

    const { rerender } = render(
      <Group>
        <First
          key="first"
          onPoseComplete={pose => {
            expect(pose).toBe('exit');
            resolve();
          }}
        />
      </Group>
    );

    rerender(
      <Group>
        <Second key="second" />
      </Group>
    );
  });
});
