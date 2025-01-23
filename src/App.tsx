import {
  NavbarFormasi,
  FooterFormasi
} from './layout'

interface IProps {
  // props you want to pass to the element other than the children
}

function App(props: React.PropsWithChildren<IProps>): React.ReactNode  {
  return (
    <div className="container mx-auto bg-cyan-500 ">
      <NavbarFormasi />
      {props.children}
      <FooterFormasi />
    </div>
  );
}

export default App;
