import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { ApiKey } from './constants/Constants';
import Map from './components/Map';

function App() {
  const render = (status: Status) => (<h1>{status}</h1>)

  return (
    <div>
      <Wrapper apiKey={ApiKey || ''} render={render}>
        <Map/>
      </Wrapper>
    </div>
  );
}

export default App;