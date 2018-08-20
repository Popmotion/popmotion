import { sortByReversePriority } from '../utils';

const PRIORITY = ['a', 'c'];

test('sort by priority', () => {
  expect(['c', 'a'].sort(sortByReversePriority(PRIORITY))).toEqual(['a', 'c']);
  expect(['b', 'd'].sort(sortByReversePriority(PRIORITY))).toEqual(['b', 'd']);
  expect(['c', 'b', 'd', 'a'].sort(sortByReversePriority(PRIORITY))).toEqual([
    'b',
    'd',
    'a',
    'c'
  ]);
});
