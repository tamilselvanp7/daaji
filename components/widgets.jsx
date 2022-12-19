import React from 'react'
import {   BsPrinterFill, BsTwitter, BsWhatsapp } from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { useRouter } from "next/router";
import styles from  '../styles/widgets.module.css'

function Widgets() {
   const router =useRouter()
    return (
        <div className={styles.main}>
            <ul  >
                <li className={styles.facebook}>
                   <a className='text-decoration-none' target='_blank' href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} rel="noreferrer"><FaFacebookF /><span>Facebook</span> </a>
                   </li>
                <li className={styles.twitter}>
                   <a className='text-decoration-none'target='_blank' href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} rel="noreferrer"> <BsTwitter /><span>Twitter</span></a>
                   </li>
                {/* <li className={styles.pinter}>
                   <a className='text-decoration-none' target='_blank' href='/'> <FaPinterestP /><span>Pinterest</span></a>
                   </li> */}
                <li className={styles.linkedin}>
                   <a className='text-decoration-none'target='_blank' href={`https://www.linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} rel="noreferrer"> <FaLinkedinIn /><span>Linkedin</span></a>
                   </li>
                <li className={styles.printer}>
                   <a className='text-decoration-none' target='_blank' href={`http://www.printfriendly.com/print/?url=${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} rel="noreferrer"> < BsPrinterFill /><span>Printer</span></a>
                   </li>
                {/* <li className={styles.mail}>
                   <a className='text-decoration-none'target='_blank' href='/'> <FaMailBulk /><span>Email</span></a>
                   </li> */}
                <li className={styles.whatsapp}>
                   <a className='text-decoration-none' target='_blank' href={`https://api.whatsapp.com/send?text=${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} rel="noreferrer"> <BsWhatsapp /><span>Whatsapp</span></a>
                   </li>

            </ul>

        </div>
    )
}

export default Widgets