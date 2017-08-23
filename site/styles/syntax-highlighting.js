import { WHITE, YELLOW_BURN, BLUE_BURN, PURPLE_BURN, PINK_BURN } from './vars';

export default `
.token {
  color: ${WHITE};

  &.string {
    color: ${YELLOW_BURN};
  }

  &.operator {
    color: ${WHITE};
  }

  &.keyword {
    color: ${BLUE_BURN};
  }

  &.comment {
    opacity: 0.5;
  }

  &.number {
    color: ${PURPLE_BURN};
  }

  &.function {
    color: ${PINK_BURN};
  }
}
`;
