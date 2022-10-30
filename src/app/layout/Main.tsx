import { DirectusContextProvider, useInitDirectusContext } from '../contexts';
import { ObjectList } from '../ObjectList';

export const Main = () => (
  <main className="main">
    <DirectusContextProvider value={useInitDirectusContext()}>
      <ObjectList />
    </DirectusContextProvider>
  </main>
);
