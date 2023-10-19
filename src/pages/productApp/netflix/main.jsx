import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Netflix() {
  function youtubeTipe(title,price,time,link) {
    return (
      <Card className="w-40 h-60 md:w-60 md:h-72 border-2">
        <CardHeader shadow={false} floated={false} className="h-96">
        <div className="flex justify-center">
          <img className="w-14 h-14 md:w-28 md:h-28" src="https://img.icons8.com/ios/50/netflix--v3.png" alt="youtube-play--v1" />  
        </div>

        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between gap-4">
            <Typography color="blue-gray" className="font-medium text-[10px] md:text-sm">
              {title}
            </Typography>
            <Typography color="blue-gray" className="font-medium text-[10px] md:text-sm hidden sm:block">
              {price}
            </Typography>
          </div>
          <Typography color="blue-gray" className="font-medium text-[10px] md:text-sm sm:hidden">
              Price {price}
            </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-[10px] md:text-sm"
          >
            {time}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Link to={link}>
          <Button
            ripple={false}
            fullWidth={true}
            className="text-[10px] md:text-sm bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Pesan
          </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }
  return (
    <motion.div
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{
      duration:2
    }}
    className="flex justify-center items-center flex-col">
      <h3 className="text-start font-bold mb-7 "> Premium Sharing</h3>
      <div className="flex max-w-6xl gap-8 justify-center item-center align-middle flex-wrap ">

        {youtubeTipe('Netflix Premium','30k','1 Month 2 user','https://wa.me/6287868785129?text=Beli%20Netflix%20Premium%20(1 user)%201%20Bulan%2035k')}

        {youtubeTipe('Netflix Premium','80k','3 Month 2 user','https://wa.me/6287868785129?text=Beli%20Netflix%20Premium%20(2 user)%201%20Bulan%2080k')}
      </div>
      <h3 className="text-start font-bold my-7 "> Premium Private</h3>
      <div className="flex max-w-6xl gap-8 justify-center item-center align-middle flex-wrap ">
        {youtubeTipe('Netflix Premium','35k','1 Month','https://wa.me/6287868785129?text=Beli%20Netflix%20Premium%20(1 user)%201%20Bulan%2035k')}
        {youtubeTipe('Netflix Premium','90k','3 Month','https://wa.me/6287868785129?text=Beli%20Netflix%20Premium%20(1 user)%203%20Bulan%2090k')}
        {youtubeTipe('Netflix Premium','160k','1 Month', 'https://wa.me/6287868785129?text=Beli%20Netflix%20Premium%20(Private)%201%20Bulan%20160k')}
      </div>
      
    </motion.div>
  );
}
