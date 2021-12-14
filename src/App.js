import './App.css';
import { Vitessce } from 'vitessce';
import myViewConfig from './my-view-config.json';
import 'vitessce/dist/es/production/static/css/index.css';
import './index.css';

function App() {
  console.log(myViewConfig);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to BrainCellData.org</h1>
      </header>
      <Vitessce
            config={myViewConfig}
            height={800}
            theme="light"
        />
    </div>
  );
}

export default App;
