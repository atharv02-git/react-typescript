import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import {Name} from './Person.types'
type PersonListProps = {
  names: Name[]
};

export default function PersonList(props: PersonListProps) {
  const theme = useContext(ThemeContext)
  return (
    <div style={{background: theme.secondary.main, color: theme.primary.text}}>
      {props.names.map((name) => {
        return (
          <h2 key={name.id}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}
