import UsHook from './Concepts/UsHook';
import FormHooks from './Concepts/FormHooks';


function App() {
  const i = 1;
  const components = [UsHook, FormHooks];
  const Rendered = components[i];
  return (
    <div>
      <Rendered />
    </div>
  );
}

export default App;
