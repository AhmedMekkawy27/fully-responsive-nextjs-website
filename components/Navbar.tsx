"use client"
import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import {useState} from "react";
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="max-container padding-container flexBetween relative z-30 py-5">
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
            </Link>
            <ul className="hidden lg:flex h-full gap-12 ">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                          className="regular-16 text-gray-50 pb-1.5 flexCenter transition hover:font-bold cursor-pointer">
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button
                    title="login"
                    type="button"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>
            <div className='app__navbar-menu lg:hidden relative flex'>
                <Image
                    src="/menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="cursor-pointer lg:hidden"
                    onClick={() => setToggle(true)}
                />
                {
                    toggle && (
                        <motion.div
                            initial={{ x: 200 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.75, ease: 'easeOut' }}
                            className={`fixed bg-white top-0 bottom-0 right-0 z-10 w-3/5 h-screen flex justify-start items-start flex-col px-8 py-6 lg:hidden bg-bg-menu bg-no-repeat bg-cover`}
                        >
                            <HiX onClick={() => setToggle(false)} className={`cursor-pointer mb-3`} size='2rem'/>
                            <ul className={`flex flex-col items-start gap-8`}>
                                {NAV_LINKS.map((link, index) => (
                                <Link href={link.href} key={`${link.key}-${index}`}
                                    className="regular-16 text-gray-50 pb-1.5 flexCenter transition hover:font-bold cursor-pointer" onClick={() => setToggle(false)}>
                                    {link.label}
                                </Link>
                ))}
                            </ul>
                        </motion.div>
                    )
                }
            </div>
        </nav>
);
};

export default Navbar;