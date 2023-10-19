import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-screen-lg ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.3,
          duration: 1.3,
        }}
      >
        <Accordion
          open={open === 1}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={` text-sm border-b-0 transition-colors ${
              open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Premium App
          </AccordionHeader>
          <AccordionBody className="text-xs pt-0 font-normal">
            Kami Menyediakan Layanan Pembelian Aplikasi Premium Murah dibanding
            platform lain dengan jaminan aman
          </AccordionBody>
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1.3,
        }}
      >
        <Accordion
          open={open === 2}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`text-sm border-b-0 transition-colors ${
              open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Bagaimana cara Pembelinya ?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-xs font-normal">
            Cukup Klik pada menu App yang akan kalian pilih dan nanti kalian
            akan diarahkan ke chat otomastis whatsapp admin shop, untuk metode
            pembayaran lebih lanjut
          </AccordionBody>
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.7,
          duration: 1.3,
        }}
      >
        <Accordion
          open={open === 3}
          className="rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`text-sm border-b-0 transition-colors ${
              open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            Bagaimana Metode Pembaayarannya ?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-xs font-normal">
            Kalian cukup mentransfer ke acount admin yang akan diberikan, dan
            cukup tunggu verifikasi pembayaran kalian dan acount akan
            dikirimkan, kami mendukung banyak metode pembayaran baik transfer
            Bank atau platform digital e-money jadi tenang saja
          </AccordionBody>
        </Accordion>
      </motion.div>
    </div>
  );
}
