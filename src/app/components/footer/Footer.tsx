import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-[0.5px] text-center px-[4rem] py-[4rem] border-gray-600">
      <p className="text-2xl text-slate-300">
        Copyright © 2024 Black Friday | Powered by Black Friday
      </p>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="cursor-pointer hover:bg-black hover:text-red-600 items-center text-3xl text-slate-300">
          <Link href="#">HOME</Link>
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-red-600 items-center text-3xl text-slate-300">
          <Link href="#">SHOP</Link>
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-red-600 items-center text-3xl text-slate-300">
          <Link href="#">ABOUT</Link>
        </div>
        <div className="cursor-pointer hover:bg-black hover:text-red-600 items-center text-3xl text-slate-300">
          <Link href="#">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
