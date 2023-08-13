import Layout from '../containers/layout/Layout';
import Page1 from '../containers/pages/Page1';
import Page2 from '../containers/pages/Page2';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='page1' element={<Page1 />} />
        <Route path='page2' element={<Page2 />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
