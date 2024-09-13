import { motion } from "framer-motion"
import { CONTACT } from "../constants/index.js" 

const Contacts = () => {
  return (

    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
            whileInView={{ opacity:1, y: 0}}
            initial={{opacity:0, y: -100}}
            transition={{duration:1.5}}
        
        className="my-10 text-center text-4xl">Message Me!</motion.h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="https://mail.google.com/mail/u/1/#inbox" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )

    
}

export default Contacts