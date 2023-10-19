import React from 'react'
import Acordion from '../../components/acordion/main'
import icon from '../../assets/icon.png'
import TextTitle from '../../components/textWrite/main'
import { Badge} from "@material-tailwind/react";
import SideBar from '../../components/aboutside/main';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {Tooltip} from "@material-tailwind/react";



function home() {
  return (
    <>
      <div className='flex justify-center items-center flex-col gap-16'>
       <div className='flex items-center align-middle flex-col md:flex-row'>
          <motion.div className='flex md:flex-col md:mr-5 order-3 md:order-1 gap-3 mt-10'
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={
              {
                delay:0.5,
                duration:1
              }
            }
          >
            <motion.div drag dragElastic={0.5}>
              <Link to='/youtube'>              
                <Badge content="top" color="blue" withBorder className='text-[8px] font-bold'>
                  <i className="ph ph-youtube-logo text-3xl"></i>
                </Badge>
              </Link>
            </motion.div>
            <motion.div drag>
              <Link to='/sportfy'>   
                <i className="ph ph-spotify-logo text-3xl"></i>
              </Link>
            </motion.div>

            <motion.div drag>
              <Link to='#'>
                <Tooltip content="Sold-out">
                  <i className="ph ph-instagram-logo text-3xl" ></i>
                </Tooltip>   
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
              delay:0.5,
              duration:3
            }}

          className='w-60 h-60 border-2 shadow-lg shadow-blue-gray-900/50 order-1 rounded-full'>

              <img
              className="img-icon  h-60 w-60 rounded-full object-cover object-center "
              src={icon}
              alt=""

            />
          </motion.div>
        <motion.div
          initial={{y:200,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            delay:0.5,
            transition:1
          }}
        className='w-60 flex justify-center items-center md:ml-10 mt-10 order-2'>
          <TextTitle/>
        </motion.div>
        
       </div>
      
       <motion.div >
        <SideBar/>
       </motion.div>
        <Acordion/>

      </div>
    
    </>
  )
}

export default home