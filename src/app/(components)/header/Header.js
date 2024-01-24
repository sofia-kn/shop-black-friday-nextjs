"use client"

import "../../globals.css"
import Image from "next/image";
import {useState} from "react";
import logo from "../../../../public/assets/images/logo.svg"
import Link from "next/link";


export default function Header() {
    const [openMenu , setOpenMenu] = useState(false);

    const openMenuHandler = () => {
        // document.querySelector(".menu").style.display = "none"
        // document.querySelector(".close").style.display = "flex"
        if(openMenu === false){
        setOpenMenu(true);
        }else{
            setOpenMenu(false);
        }

    }
    return (
        <div className="body-bg-image w-full h-screen flex flex-row justify-center items-center text-center">
            <header className="w-full flex h-[80px] absolute top-0  flex-row justify-between font-kr text-2xl px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px] items-center">
                <Image className="3xl-max:ml-3" src={logo} width={132} height={48} alt="logo"/>
                {!openMenu ?(
                        <div className="w-full absolute top-32 flex flex-col lg-max:hidden justify-center items-center left-0 h-[260px] bg-[#2A2A2A]">
                            <div className="w-full  h-[40px] flex justify-start cursor-pointer hover:bg-black hover:text-red-600 transition ease-in-out delay-100 items-center text-4xl px-5 py-[3.15rem] border border-gray-600 border-b-0 text-center">
                                <Link href="#">
                                    HOME
                                </Link>
                            </div>
                            <div className="w-full  h-[40px] flex justify-start cursor-pointer hover:bg-black hover:text-red-600 transition ease-in-out delay-100 items-center text-4xl px-5 py-[3.15rem] border border-gray-600 border-b-0 text-center">
                                <Link href="#">
                                    SHOP
                                </Link>
                            </div>
                            <div className="w-full  h-[40px] flex justify-start cursor-pointer hover:bg-black hover:text-red-600 transition ease-in-out delay-100 items-center text-4xl px-5 py-[3.15rem] border border-gray-600 border-b-0 text-center">
                                <Link href="#">
                                    ABOUT
                                </Link>
                            </div>
                            <div className="w-full  h-[40px] flex justify-start cursor-pointer hover:bg-black hover:text-red-600 transition ease-in-out delay-100 items-center text-4xl px-5 py-[3.15rem] border border-gray-600 text-center">
                                <Link href="#">
                                    CONTACT
                                </Link>
                            </div>

                        </div>
                    ):(
                    <div className="hidden"></div>
                )}

                <div className="w-[420px] flex justify-center items-center">
                    <nav className="w-full hidden justify-between  lg-max:flex  mr-[100px] lg-max:mr-[90px] lg-max:ml-[10px] 3xl-max:ml-[8px] ">
                        <Link className=" font-medium tracking-tighter text-gray-300 text-[17px] hover:text-[#FF4955] hover:underline" href="#">
                            HOME
                        </Link>
                        <Link className=" font-medium tracking-tighter	 text-gray-300 text-[17px] hover:text-[#FF4955] hover:underline" href="#">
                            SHOP
                        </Link>
                        <Link className=" font-medium text-gray-300 tracking-tighter text-[17px] hover:text-[#FF4955] hover:underline" href="#">
                            ABOUT
                         </Link>
                        <Link className=" font-medium text-gray-300 tracking-tighter text-[17px] hover:text-[#FF4955] hover:underline" href="#">
                            CONTACT
                        </Link>

                    </nav>
                </div>
                <button className="flex justify-center items-center p-3 active:border-dotted active:border-2 active:border-[#fc3746] lg-max:hidden" onClick={openMenuHandler}>

                    {!openMenu ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 20 20"><path fill="#FC3746" d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22"><path fill="#FC3746" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
                    )}
                </button>

                <div className="hidden lg-max:flex mr-2 lg-max:mr-0">
                    <div className=" relative w-20 h-20 flex justify-center items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1792 1792"><path fill="#FC3746" d="m1757 1408l35 313q3 28-16 50q-19 21-48 21H64q-29 0-48-21q-19-22-16-50l35-313zm-93-839l86 775H42l86-775q3-24 21-40.5t43-16.5h256v128q0 53 37.5 90.5T576 768t90.5-37.5T704 640V512h384v128q0 53 37.5 90.5T1216 768t90.5-37.5T1344 640V512h256q25 0 43 16.5t21 40.5m-384-185v256q0 26-19 45t-45 19t-45-19t-19-45V384q0-106-75-181t-181-75t-181 75t-75 181v256q0 26-19 45t-45 19t-45-19t-19-45V384q0-159 112.5-271.5T896 0t271.5 112.5T1280 384"/></svg>
                        <div className="absolute flex justify-center items-center text-xl rounded-full font-bold top-0 right-0 w-7 h-7 text-center mb-2 bg-[#FC3746]">
                            0
                        </div>
                    </div>


                </div>

            </header>
            <div className="flex w-full lg-max:w-[90%] 3xl-max:w-[75%]  h-screen flex-col justify-start items-center  mt-[115px] md:mt-[157px] lg:mt-[175px] lg-max:mt-[212px] 3xl-max:mt-[215px]  px-2">
                <p className="text-[#FF4955] mb-7 3xl-max:mb-6  font-Kr text-[20px] lg:text-[23px] lg-max:text-[30px]">Hurry, Black Friday Is Almost Here!</p>
                <h1 className="text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  leading-[5.1rem] lg:leading-[9rem] lg-max:leading-[10rem] tracking-[0] font-Lr font-normal uppercase ">
                    Time Left Until Our
                    <span className="text-[#FF4955] text-[5.6rem] lg:text-[10rem] lg-max:text-[11rem]  ml-4 ">
                         Biggest Sale of the Year Begins
                    </span>

                </h1>
                <button className="mt-[3.8rem] 3xl-max:mt-[6rem] text-3xl 3xl-max:text-[2rem]  font-Lr font-normal tracking-widest bg-[#FC3746] hover:bg-[#fc414f] w-[149px] 3xl-max:w-[15.4rem] h-[50px] 3xl-max:h-[5.2rem]">
                    SET REMINDER
                </button>
            </div>

        </div>
    )
}