import { useRef } from 'react';
import randomColor from 'randomcolor';
import { useTrail } from 'react-spring';
import random from 'lodash.random';
import Petal from './Petal';
import './App.css';

function App() {
  const ref = useRef(true);
  const petals = randomColor({ count: 22, luminosity: 'bright', hue: 'purple' });
  const [springs, set, stop] = useTrail(petals.length, index => ({ x: 0, y: 0 }));

  return (
    <div
      className="main"
      onClick={() => {
        if (ref.current) {
          const test3 = random(0, 1, false);
          const test = random(1, 360, false) * (test3 ? -1 : 1);
          const test2 = random(1, 360, false) * (test3 ? -1 : 1);
          set(index => ({ x: test * 100, y: test2 * 100 }));
          ref.current = false;
        } else {
          set(index => ({ x: 0, y: 0 }));
          ref.current = true;
        }
      }}
    >
      {springs.map((props, index) => (
        <Petal key={petals[index]} color={petals[index]} style={props} num={index + 1} />
      ))}
    </div>
  );
}

export default App;
