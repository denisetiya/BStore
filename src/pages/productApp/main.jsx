import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import bstation from '../../assets/bstation.png'
import wetv from '../../assets/wetv.png'
import remini from '../../assets/Remini.png'
import loklok from '../../assets/loklok.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Product() {

  function card (logo,title, descrip,link){
    return (
      <Card className="mt-6 shadow-xl border-2 border-gray-200 w-40 md:w-60">
      <CardBody>
        {logo}
        <Typography variant="h5" color="blue-gray" className="mb-2 text-sm sm:text-md md:text-xl">
          {title}
        </Typography>
        <Typography className='text-xs sm:text-sm md:text-xl'>
          {descrip}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a  className="inline-block text-xs">
          <Link to ={link}>

          <Button size="sm" variant="text" className="flex items-center gap-2 text-[8px] md:text-xs">
            Selengkapnya
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
            </svg>
          </Button>
          </Link>
        </a>
      </CardFooter>
    </Card>
    )
  }
  return (
    <div className='flex w-full justify-center items-center'>

      <motion.div
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
          duration:2
        }}
      className='flex  justify-center items-center gap-4 flex-wrap max-w-5xl mb-10'>
        {card(<i className="ph ph-youtube-logo text-8xl"></i>,'Youtube','Indplan and Famplan','/youtube')}
        {card(<img width="90" height="90" src="https://img.icons8.com/ios/50/spotify--v1.png" alt="spotify--v1" className='my-2 sm:my-4'/>,'Sportfy','Premium plan','/sportfy')}
        {card(<img width="90" height="90" src="https://img.icons8.com/ios/50/netflix--v3.png" className='my-2 sm:my-4'/>,'Netflix','Premium plan','/netflix')}
        {card(<img width="90" height="90" src="https://img.icons8.com/wired/64/disney-plus.png" alt="disney-plus"/>,'Disney +','Private and Sharing','/disney')}
        {card(<img width="90" height="90" src="https://img.icons8.com/ios/50/canva.png" alt="canva" className='my-4'/>,'Canva','Premium plan','/canva')}
        {card(<img width="90" height="90" src="https://img.icons8.com/carbon-copy/100/viu.png" alt="viu"/>,'Viu','Private and No Limit','/viu')}
        {card(<img width="90" height="90" src="https://img.icons8.com/ios/50/picsart.png" alt="picsart"/>,'Picsart','Private and Sharing','/picsart')}
        {card(<img width="80" height="80" src="https://img.icons8.com/wired/64/phone.png" alt="phone" className='rounded-full border-2 border-black p-2 mb-2'/>,'GetContact','Premium plan','/getcontact')}
        {card(<img width="90" height="90" src={bstation} alt="bs"/>,'Bstation','Private and Sharing','/bstation')}
        {card(<img width="90" height="90" src={remini} alt="remini" className='my-3'/>,'Remini','Android and Ios','/remini')}
        {card(<img width="85" height="85" src={loklok} alt="loklok" className='mb-2'/>,'LokLok','Private and Sharing','/loklok')}
        {card(<img width="85" height="85" src={wetv} alt="wetv" className='mb-2'/>,'WeTv','Private and Sharing','/wetv')}
      </motion.div>
    </div>
  )
}

export default Product
