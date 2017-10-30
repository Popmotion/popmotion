import { Action } from '../action';
declare const composite: (actionMap: {
    [key: string]: Action;
}) => Action;
export default composite;
