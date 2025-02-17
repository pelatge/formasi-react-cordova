// import { getRepository } from "typeorm";
// import { initializeDB } from './database';
// import AppDataSource from '../database/dataSource';
// import { User } from '../entities/user';
import {
  NavbarFormasi,
  FooterFormasi
} from './layout'

interface IProps {
  // props you want to pass to the element other than the children
}

function App(props: React.PropsWithChildren<IProps>): React.ReactNode  {
  //   useEffect(() => {
  //   document.addEventListener("deviceready", async () => {
  //     try {
  //       await initializeDB();
  //       console.log("Database connected!");
        
  //       // Contoh operasi CRUD
  //       const userRepo = getRepository(User);
        
  //       // Create
  //       const newUser = new User();
  //       newUser.name = "John";
  //       newUser.handphone = "yodha";
  //       await userRepo.save(newUser);

  //       // Read
  //       const users = await userRepo.find();
  //       console.log(users);
  //     } catch (error) {
  //       console.error("Database error:", error);
  //     }
  //   });
  // }, []);
  return (
    <div className="container mx-auto bg-blue-400 ">
      <NavbarFormasi />
      {props.children}
      <FooterFormasi />
    </div>
  );
}

export default App;
