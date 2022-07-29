import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';

import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Form />
      <List />
    </div>
  );
};

export default Layout;
