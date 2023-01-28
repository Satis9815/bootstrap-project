import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/userAction';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
const Header = ({ isAuthenticated = false, user }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    // console.log("logout");
    dispatch(logout());
    onClose();
  };

  const {isOpen,onClose,onOpen} = useDisclosure();
  return (
   <>
    {/* <section>
      <Navbar bg="primary " expand="lg">
        <Container className="d-flex align-items-end">
          <Navbar.Brand href="#home" className="text-white">
            Free Course
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="d-flex  justify-content-between  align-items-center ">
              <Link to="/" className="text-white">
                Home
              </Link>
              <Link to="/courses" className="text-white">
                Brouse All Coureses
              </Link>
              <Link to="/reqcourse" className="text-white">
                Request a Coureses
              </Link>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
              <Link to="/about" className="text-white">
                About
              </Link>

              {isAuthenticated ? (
                <>
                  <Link to="/profile">
                    <div className="mx-2">
                      <Button variant="outline-info text-white">Profile</Button>
                    </div>
                  </Link>

                  <Button
                    variant="outline-info text-white"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Button>

                  {user && user.role === 'admin' && (
                    <Link to="/admin/dashboard">
                      <div className="mx-2">
                        {' '}
                        <Button variant="outline-info text-white">
                          Dashboard
                        </Button>
                      </div>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link to="/login">
                    <div className="mx-2">
                      <Button variant="outline-info text-white">Login</Button>
                    </div>
                  </Link>
                  <Link to="/signup">
                    <div>
                      <Button variant="outline-info text-white">Signup</Button>
                    </div>
                  </Link>
                </>
              )}
              <div>
                <ColorModeSwitcher />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section> */}

    <ColorModeSwitcher />
    <Button
    onClick={onOpen} zIndex={999}
     colorScheme={"yellow"} width={"12"}  height={"12"} rounded={"full"} position={"fixed"} top={"6"} left={"6"}>
      <RiMenu5Fill/>
    </Button>

    <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay backdropFilter={"blur(2px)"}/>
      <DrawerContent>
        <DrawerHeader borderBottomWidth={"1px"}>
            FREECOURSE
        </DrawerHeader>
        <DrawerBody>

          <VStack spacing={"4"} alignItems={"flex-start"}>
            <Link to={"/"} onClick={onClose}> <Button variant={"ghost"}>Home</Button></Link>
            <Link to={"/courses"} onClick={onClose}> <Button variant={"ghost"}>Brouse All Coureses</Button></Link>
            <Link to={"/reqcourse"} onClick={onClose}> <Button variant={"ghost"}>Request a Coureses</Button></Link>
            <Link to={"/about"} onClick={onClose}> <Button variant={"ghost"}>About</Button></Link>
            <Link to={"/contact"} onClick={onClose}> <Button variant={"ghost"}>Contact</Button></Link>

            <HStack justifyContent={"space-evenly"}
            position="absolute"
            bottom={"2rem"}
            width="80%">

{isAuthenticated ? (
                <>
                <VStack>
                  <HStack>
                  <Link to="/profile" onClick={onClose}>
                
                      <Button variant={"ghost"} colorScheme={"yellow"}>Profile</Button>
               
                  </Link>
                  <Button
                  variant={"ghost"}
                 
                    onClick={logoutHandler}
                  >
                    <RiLogoutBoxLine/>
                    Logout
                  </Button>

                  </HStack>
                  {user && user.role === 'admin' && (
                    <Link to="/admin/dashboard" onClick={onClose}>
                
                        <Button variant={"ghost"} colorScheme={"purple"}>
                          <RiDashboardFill style={{margin:"4px"}}/>
                          Dashboard
                        </Button>
                    
                    </Link>
                  )}
                </VStack>
                  

                  

                 
                </>
              ) : (
                <>
                  <Link to="/login" onClick={onClose}>
                      <Button colorScheme={"yellow"}>Login</Button>
                  </Link>
                  <p>OR</p>
                  <Link to="/signup" onClick={onClose}>
                      <Button colorScheme={"yellow"}>Signup</Button>
                  </Link>
                </>
              )}

            </HStack>
          </VStack>

        </DrawerBody>
      </DrawerContent>
    </Drawer>



   </>
  );
};

export default Header;
