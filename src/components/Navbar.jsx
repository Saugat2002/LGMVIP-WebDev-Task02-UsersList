// import React from 'react'

const Navbar = ({handleClick}) => {

    return (
        <div className="flex justify-between items-center p-5 bg-purple-300">
            <span className="font-bold text-xl">USERS PAGE</span>
            <button className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-200 hover:text-black hover:scale-105 active:bg-slate-100 transition-all" onClick={handleClick}>Get Users</button>
        </div>
    )
}

export default Navbar