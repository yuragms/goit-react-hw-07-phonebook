
import { connect } from 'react-redux';
import styles from './Counter.module.css';
import * as actions from '../../redux/counter/counter-actions';

 function Counter({value, step, onIncrement, onDecrement}) {
  
  

  return (
    <><div className={styles.counter_box}>
      <button
        className={styles.btn}
        type="button"
        onClick={()=>onIncrement(step)}
      >increment{step}</button>
<div  className={styles.value}>{value}</div>
      <button
        className={styles.btn}
        type="button"
        onClick={()=>onDecrement(step)}
      >
        decrement{step}
      </button>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
    value: state.counter.value,
    step: state.counter.step,
});


const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
