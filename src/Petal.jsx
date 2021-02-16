import { useSpring, a } from 'react-spring';
import classNames from 'classnames';
import './Petal.css';

const Petal = ({ style, color, num }) => {
  return (
    <a.div style={style} className={classNames('wrapper', `p${num}`)}>
      <div className={`rotation${num}`}>
        <div style={{ backgroundColor: color }} className="petal" />
      </div>
    </a.div>
  );
};

export default Petal;
