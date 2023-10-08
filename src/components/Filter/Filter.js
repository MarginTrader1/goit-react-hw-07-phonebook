import { Div } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  /**Функция отправки фильтра */
  const getFilter = value => {
    dispatch(addFilter(value));
  };

  return (
    <Div>
      <h3>Find contacts by name</h3>
      <label>
        <input
          type="text"
          name="name"
          
          /* в событие onChange передаем value ивента аргументом в метод 
          addFilter(). Так велью инпута передается в App */

          onChange={evt => getFilter(evt.target.value)}
          placeholder="Enter name here....."
        />
      </label>
    </Div>
  );
};
