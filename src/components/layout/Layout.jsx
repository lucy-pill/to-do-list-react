import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import { LayoutBox } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutBox>
      <Header />
      <Form />
      <List />
    </LayoutBox>
  );
};

export default Layout;
