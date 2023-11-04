'use client'

import { useState } from "react"
import Link from "next/link";

export default function Header() {
    const [menubarVisible, setMenubatVisble] = useState(false);
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200">
                    <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4 md:p-8">
                        <a href="/" className="flex flex-col items-center gap-4">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Gujarat_Police_Logo.png/210px-Gujarat_Police_Logo.png" className="h-20" alt="Gujarat Police Logo" />
                            <span className="text-black text-xl sm:text-2xl font-semibold text-center">
                                <span>CITIZEN FEEDBACK PORTAL, GUJARAT POLICE</span>
                                <span className="hidden sm:block text-sm">(HOME DEPARTMENT, GOVERNMENT OF GUJARAT)</span>
                            </span>
                        </a>
                    </div>
                </nav>
                <nav className="hidden sm:block bg-[#281859]">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 mr-6 text-sm">
                                <li className="group px-4 py-3 hover:bg-white hover:cursor-pointer">
                                    <a href="/" className="text-white group-hover:text-[#281859]" aria-current="page">Home</a>
                                </li>
                                <li className="group px-4 py-3 hover:bg-white hover:cursor-pointer">
                                    <a href="/feedback" className="text-white group-hover:text-[#281859]">Feedback</a>
                                </li>
                                <li className="group px-4 py-3 hover:bg-white hover:cursor-pointer">
                                    <a href="#" className="text-white group-hover:text-[#281859]">Know Home Department</a>
                                </li>
                                <li className="group px-4 py-3 hover:bg-white hover:cursor-pointer">
                                    <a href="#" className="text-white group-hover:text-[#281859]">Contact Details</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="block sm:hidden bg-[#281859] border-gray-200">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                        <button onClick={() => { setMenubatVisble(!menubarVisible) }} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center px-2 w-10 h-6 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none" aria-controls="navbar-dropdown" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className={`${menubarVisible ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row space-y-2 md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                                <li>
                                    <a href="/" className="block py-2 pl-3 pr-4 text-white bg-[#281859] rounded md:bg-transparent md:text-[#281859] md:p-0" aria-current="page">Home</a>
                                </li>
                                {/* <li>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#281859] md:p-0 md:w-auto">Dropdown <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg></button>
                                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                        </div>
                                    </div>
                                </li> */}
                                <li>
                                    <Link href="/feedback">
                                    <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#281859] md:p-0">Feedback</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#281859] md:p-0">Know Home Department</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#281859] md:p-0">Contact Details</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}
