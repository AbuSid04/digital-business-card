import React from "react"
import twitter from "./assets/twitter-icon.svg"
import facebook from "./assets/facebook-icon.svg"
import insta from "./assets/instagram-icon.svg"
import github from "./assets/github-icon.svg"

export default function Footer(){
    return (
        <div className="bg-[#161619] px-16 py-4 flex justify-between">
            <a href="#"><img src={twitter} alt="twitter logo" className="w-6 h-6 m-0" /></a>
            <a href="#"><img src={facebook} alt="facebook logo" className="w-6 h-6 m-0" /></a>
            <a href="#"><img src={insta} alt="insta logo" className="w-6 h-6 m-0" /></a>
            <a href="#"><img src={github} alt="github logo" className="w-6 h-6 m-0" /></a>
        </div>
    )
}