"use client";

import "../../globals.css";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../../public/assets/images/logo.svg";
import Link from "next/link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    // document.querySelector(".menu").style.display = "none"
    // document.querySelector(".close").style.display = "flex"
    if (openMenu === false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };
  return (
          <div className="body-bg-image w-full h-screen flex flex-row justify-center items-center text-center">
      <header className="w-full flex h-[80px] absolute top-0  flex-row justify-between font-kr text-2xl px-5 mr-2 md:px-7  lg-max:px-[74px] 2xl-max:px-[90px] items-center">
        <Image
          className="3xl-max:ml-3"
          src={logo}
          width={132}
          height={48}
          alt="logo"
        />
        {openMenu ? (
          <div className="w-full absolute top-32 flex flex-col lg-max:hidden justify-center items-center left-0 h-[260px] bg-[#2A2A2A]">
            <div className="w-full  h-[40px] flex justify-start cursor-pointer hover:bg-black hover:text-red-600 transition ease-in-out delay-100 items-center text-4xl px-5 py-[3.15rem] border border-gray-600 border-b-0 text-center">
              <Link href="/">HOME</Link>
            </div>
            <div className="w-full  h-[40px] flex justify-start cursor-pointer hover:bg-black hover:text-red-600 transition ease-in-out delay-100 items-center text-4xl px-5 py-[3.15rem] border border-gray-600 border-b-0 text-center">
              <Link href="/shop">SHOP</Link>
            </div>
            <div className="w-full  h-[40px] flex justify-start cursor-pointer hover:bg-black hover:text-red-600 transition ease-in-out delay-100 items-center text-4xl px-5 py-[3.15rem] border border-gray-600 border-b-0 text-center">
              <Link href="/about">ABOUT</Link>
            </div>
            <div className="w-full  h-[40px] flex justify-start cursor-pointer hover:bg-black hover:text-red-600 transition ease-in-out delay-100 items-center text-4xl px-5 py-[3.15rem] border border-gray-600 text-center">
              <Link href="/contact">CONTACT</Link>
            </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}

        <div className="w-[420px] flex justify-center items-center">
          <nav className="w-full hidden justify-between  lg-max:flex  mr-[100px] lg-max:mr-[90px] lg-max:ml-[10px] 3xl-max:ml-[8px] ">
            <Link
              className=" font-medium tracking-tighter text-gray-300 text-[17px] hover:text-[#FF4955] hover:underline"
              href="/"
            >
              HOME
            </Link>
            <Link
              className=" font-medium tracking-tighter text-gray-300 text-[17px] hover:text-[#FF4955] hover:underline"
              href="/shop"
            >
              SHOP
            </Link>
            <Link
              className=" font-medium text-gray-300 tracking-tighter text-[17px] hover:text-[#FF4955] hover:underline"
              href="/about"
            >
              ABOUT
            </Link>
            <Link
              className=" font-medium text-gray-300 tracking-tighter text-[17px] hover:text-[#FF4955] hover:underline"
              href="/contact"
            >
              CONTACT
            </Link>
          </nav>
        </div>
        <button
          className="flex justify-center items-center p-3 active:border-dotted active:border-2 active:border-[#fc3746] lg-max:hidden"
          onClick={openMenuHandler}
        >
          {!openMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 20 20"
            >
              <path fill="#FC3746" d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 22 22"
            >
              <path
                fill="#FC3746"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              />
            </svg>
          )}
        </button>

        <div className="hidden lg-max:flex mr-2 lg-max:mr-0">
          <div className=" relative w-20 h-20 flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 1792 1792"
            >
              <path
                fill="#FC3746"
                d="m1757 1408l35 313q3 28-16 50q-19 21-48 21H64q-29 0-48-21q-19-22-16-50l35-313zm-93-839l86 775H42l86-775q3-24 21-40.5t43-16.5h256v128q0 53 37.5 90.5T576 768t90.5-37.5T704 640V512h384v128q0 53 37.5 90.5T1216 768t90.5-37.5T1344 640V512h256q25 0 43 16.5t21 40.5m-384-185v256q0 26-19 45t-45 19t-45-19t-19-45V384q0-106-75-181t-181-75t-181 75t-75 181v256q0 26-19 45t-45 19t-45-19t-19-45V384q0-159 112.5-271.5T896 0t271.5 112.5T1280 384"
              />
            </svg>
            <div className="absolute flex justify-center items-center text-xl rounded-full font-bold top-0 right-0 w-7 h-7 text-center mb-2 bg-[#FC3746]">
              0
            </div>
          </div>
        </div>
      </header>
    </div>
      
       

  );
}
