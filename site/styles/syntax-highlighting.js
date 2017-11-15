import { BLACK, BRAND, ENTITY, ACTION } from './vars';

export default `
.token {
  color: ${BLACK};

  &.string {
    color: ${BRAND};
  }

  &.operator {
    color: ${BLACK};
  }

  &.keyword {
    color: ${ENTITY};
  }

  &.comment {
    opacity: 0.5;
  }

  &.number {
    color: ${BRAND};
  }

  &.function {
    color: ${ACTION};
  }
}
`;
