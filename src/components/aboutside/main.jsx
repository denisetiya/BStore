import React, { useState } from 'react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Badge 
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import pp from '../../assets/pp.jpeg'
import pp2 from '../../assets/pp2.jpeg'

export default function DrawerDefault() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [currentImage, setCurrentImage] = useState(pp);

  const handleClick = () => {
 
    if (currentImage === pp) {
      setCurrentImage(pp2);
    } else {
      setCurrentImage(pp);
    }
  };



  return (
    <React.Fragment>
      <motion.div
        initial={{y:200,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{
          delay:0.5,
          duration:1
        }}
      >
        <Button onClick={openDrawer}>About US</Button>
      </motion.div>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            About Me
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          <Card className="border-2">
            <CardHeader floated={false} className="rounded-full">
              <img src={currentImage} alt="profile-picture" onClick={handleClick} />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Deni Setiya
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                FrontEnd Devloper
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
              <Link to="mailto: denisetiya3@gmail.com">
                <i className="ph ph-envelope text-2xl"></i>
              </Link>
              <Link to="https://instagram.com/denisetiya_">
                <i className="ph ph-instagram-logo text-2xl"></i>
              </Link>
              <Link to="https://wa.me/6283179823209">
                <i className="ph ph-whatsapp-logo text-2xl"></i>
              </Link>
              <Link to="https://github.com/denisetiya">
                <i className="ph ph-github-logo text-2xl"></i>
              </Link>
            </CardFooter>
          </Card>
        </Typography>
        <div className="mt-20 text-center text-gray-400">
          <Badge content="Beta" color="blue" className="text-[8px] opacity-50">
            <button className="p-2">
              App version 2.5
            </button>
          </Badge>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
