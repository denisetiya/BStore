import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import SignDialog from "../sign/SignIn";
import { motion } from "framer-motion";

export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [size, setSize] = React.useState(null);
  const handleOpen = (value) => setSize(value);

  const navList = (
    <motion.ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
      initial={{y:-100}}
      animate={{y:0}}
      transition={{
        duration:1,
        delay:0.1,

      }}
    >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/app" className="flex items-center">
          Premium App
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <div className="flex gap-3 cursor-pointer">
          <a onClick={() => handleOpen("xs")} variant="gradient">
            Social Media
          </a>
        </div>

        <Dialog open={size === "xs"} size={size || "md"} handler={handleOpen}>
          <DialogHeader>Out Stock</DialogHeader>
          <DialogBody className="text-gray-900 font-medium">
            Untuk Product Sosmed sekarang masih sold Out, jadi harap bersabar
          </DialogBody>
          <DialogFooter>
            <Button
              variant="gradient"
              color="blue"
              onClick={() => handleOpen(null)}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Typography>
    </motion.ul>
  );

  return (
    <motion.div
    initial={{y:-100}}
    animate={{y:0}}
    transition={{
      duration:1,
      
    }}
    className="w-screen flex justify-center items-center  top-0 z-50 fixed">
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 border-2 border-gray-100">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold text-blue-700 flex"
          >
            <img src={icon} alt="" className="w-5 img-icon" />
            Bstore
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1 ">
            {SignDialog("hidden", "block")}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div
            className="flex items-center gap-x-1 ">
              {SignDialog("inline-block", "inline-block")}
            </div>
          </div>
        </Collapse>
      </Navbar>
    </motion.div>
  );
}
