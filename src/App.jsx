import TodoList from './pages/TodoList';
import Detail from './pages/Detail';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' exact='true' element={<TodoList />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
  );
};

export default App;
