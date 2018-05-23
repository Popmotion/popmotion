import { transform as babel6Transform } from 'babel-core'
import { transform as babel7Transform } from '@babel/core'
import makeCases from 'jest-in-case'
import plugin from '../src'

const cases = {
  'rewritten import': {
    code: `
      import posed from 'react-pose'
    `
  },
  'default posed': {
    code: `
      import posed from 'react-pose'

      const AnimatedDiv = posed.div({ foo: 'bar' })
    `
  },
  'default custom name': {
    code: `
      import myPosed from 'react-pose'

      const AnimatedDiv = myPosed.div({ foo: 'bar' })
    `
  },
  'default as named specifier': {
    code: `
      import { PoseGroup, default as myPosed } from 'react-pose'

      const AnimatedDiv = myPosed.div({ foo: 'bar' })
    `
  },
  'different member expression': {
    code: `
      import test from 'test'

      const AnimatedDiv = test.div({ foo: 'bar' })
    `
  },
  'non member expression': {
    code: `
      import posed from 'react-pose'

      const AnimatedDiv = posed('div')({ foo: 'bar' })
      someCall(posed)
      const obj = { posed }
    `
  },
}

const createTester = transform => ({ code }) => {
  expect(
    transform(code, {
      plugins: [plugin],
      babelrc: false
    }).code
  ).toMatchSnapshot()
}

makeCases('babel 6', createTester(babel6Transform), cases)
makeCases('babel 7', createTester(babel7Transform), cases)
