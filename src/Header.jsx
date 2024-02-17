import React from "react"
import img from "./assets/zoro.png"
import mail from "./assets/mail.svg"
import linkedin from "./assets/linkedin.svg"

export default function Header(){
    return (
        <div className="text-center w-full">
            <img src={img} alt="picture of zoro" className="h-80 object-cover " />
            <h1 className="text-white text-3xl font-extrabold mt-4">Rorona Zoro</h1>
            <h2 className="text-base text-[#F3BF99] mt-0 font-normal">Fronted Developer</h2>
            <h4 className="text-[#F5F5F5] mt-2 text-xs">rorona@zoro.webworld</h4>
            <div className="flex justify-between items-center px-6 mt-4">
                <a href="#" className="bg-white flex items-center justify-center text-base font-medium text-[#374151] px-8 py-2 rounded-lg cursor-pointer">
                    <img src={mail} alt="Email logo" className="w-4 h-4 mr-2" />
                    Email
                </a>
                <a href="#" className="bg-[#5093E2] flex items-center justify-center text-base font-medium text-[#FFFFFF] px-5 py-2 rounded-lg cursor-pointer">
                    <img src={linkedin} alt="Linked Logo" className="w-4 h-4 mr-2" />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}