import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Tooltip,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

 
export default function SignDialog2() {
 

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <motion.div 
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{
      duration:2
    }}
    className="flex w-screen h-screen justify-center items-center">

        <Card className="mx-auto w-full max-w-lg border-2">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Masukan Username,email dan password untuk daftar.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Username
            </Typography>
            <Input label="Username" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
          <Tooltip
              content="Coming Soon"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Daftar
            </Button>
          </Tooltip>
          </CardFooter>
        </Card>
    </motion.div>
    
  );
}