import { connect } from 'react-redux';
import component from './index';
import { ReduceStore } from '@renderer/store/interface';
import setGlobalTitle from '@renderer/actives/global';
const mapStateToProps = (store: ReduceStore) => {
  return {
    store,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTitle: () => {
      dispatch(setGlobalTitle());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(component) as any;
