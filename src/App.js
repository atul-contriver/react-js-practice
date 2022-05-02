import Accordion from './Pages/Accordion/Accordion';
import Amap from './Pages/ArrayMap/Amap';
import Counter from './Pages/Counter/Counter';
import Filter from './Pages/Filter Method/Filter';
import Todo from './Pages/TodoList/Todo';
// import Slider from './Pages/Slider/Slider';

function App() {
  return (
    <>
      <Filter/>
      <Counter/>
      <Amap/>
      <Accordion/>
      {/* <Slider/> */}
      <Todo/>
    </>
  );
}

export default App;
