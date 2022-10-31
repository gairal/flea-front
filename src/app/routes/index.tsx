import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
import { ObjectList } from './List';
import { ObjectItem } from './Item';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: 'objects/', element: <ObjectList /> },
      { path: 'objects/:objectId', element: <ObjectItem /> },
    ],
  },
]);
