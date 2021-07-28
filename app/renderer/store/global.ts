import { handleActions } from 'redux-actions';

export interface GlobalType{
    title:string;
}

const defaultGlobal: GlobalType = {
  title: '欢迎来到第二页',
};

// export default (state = defaultGlobal, action: BaseActive) => {
//   switch (action.type) {
//     case 'CHANGE_STRING':
//       const newState = Object.assign({}, state);
//       newState.title = '测试一下数据？';
//       return newState;
//     default:
//       return state;
//   }
// };

export default handleActions(
    {
      CHANGE_STRING: (state, active) => {
        const newState = Object.assign({}, state);
        newState.title = '测试一下数据？';
        return newState;
      },
    },
    defaultGlobal,
);
