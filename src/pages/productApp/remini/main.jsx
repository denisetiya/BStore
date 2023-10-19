import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import remini from '../../../assets/Remini.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Remini() {
  function youtubeTipe(title,price,time,link) {
    return (
      <Card className="w-40 h-60 md:w-60 md:h-72 border-2">
        <CardHeader shadow={false} floated={false} className="h-96">
        <div className="flex justify-center">
          <img className="w-14 h-14 md:w-28 md:h-28" src={remini}  alt="youtube-play--v1" />  
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
      <h3 className="text-start font-bold mb-7 ">Remini Android</h3>
      <div className="flex max-w-6xl gap-8 justify-center item-center align-middle flex-wrap ">
        {youtubeTipe('Remini lite','15k','1 Month', 'https://wa.me/6287868785129?text=Beli%20Remini%20(android)%20Premium%20(Lite)%201%20Bulan%2015k')}
        {youtubeTipe('Remini lite','28k','1 Year', 'https://wa.me/6287868785129?text=Beli%20Remini%20(android)%20Premium%20(Lite)%201%20Tahun%2028k')}
        {youtubeTipe('Remini pro','50k','1 Year', 'https://wa.me/6287868785129?text=Beli%20Remini%20(android)%20Premium%20(Pro)%201%20Tahun%2050k')}

      </div>
      <h3 className="text-start font-bold my-7 ">Remini IOS</h3>
      <div className="flex max-w-6xl gap-8 justify-center item-center align-middle flex-wrap ">
        {youtubeTipe('Remini lite','22k','1 Year', 'https://wa.me/6287868785129?text=Beli%20Remini%20(IOS)%20Premium%20(Lite)%201%20Tahun%2022k')}
        {youtubeTipe('Remini pro','55k','Year', 'https://wa.me/6287868785129?text=Beli%20Remini%20(IOS)%20Premium%20(Pro)%201%20Tahun%2055k')}
      </div>
      
    </motion.div>
  );
}
