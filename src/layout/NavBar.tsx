import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";

import {HashRouter,Routes, Route,Link} from 'react-router-dom';
import {useState} from 'react'

import {
  BerandaFormasi,
  TentangFormasi,
  KontakFormasi,
  ImagePengurus,
  ImageKeputusan
} from './../page'



export function NavbarFormasi() {
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

 
    return (
    <HashRouter basename="/">
    <Navbar fluid rounded>
      <NavbarBrand href="https://formasi52263.blogspot.com">
        <img src="/logo/formasi.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FORMASI</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="/logo/formasi.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">FORMASI</span>
            <span className="block truncate text-sm font-medium">formasi52263@gmail.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Pengaturan</DropdownItem>
          <DropdownItem>Info</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Keluar</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink to="/" as={Link}  active={activeLink === '/' ? true : false} onClick={() => handleClick('/')}>
          Beranda
        </NavbarLink>
        <NavbarLink to="/tentang"  as={Link} active={activeLink === '/tentang' ? true : false} onClick={() => handleClick('/tentang')}>
          Tentang 
        </NavbarLink>
        <NavbarLink to="/kontak"  as={Link} active={activeLink === '/kontak' ? true: false} onClick={() => handleClick('/kontak')}>
          Kontak
        </NavbarLink>
      </NavbarCollapse>
      

    </Navbar>

    {/*Routing */}
    <Routes>
        
        <Route path="/"  element={<BerandaFormasi />} />
        <Route path="/tentang" element={<TentangFormasi />} />
        <Route path="/kontak" element={<KontakFormasi />} />
        <Route path="/pengurus" element={<ImagePengurus />} />
        <Route path="/keputusan" element={<ImageKeputusan />} />

    </Routes>
    </HashRouter>


  );
}
