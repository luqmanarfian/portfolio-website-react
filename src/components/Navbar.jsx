import { useState, useEffect } from "react"


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold">Luqman Arfian</h1>
            </div>
            <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2  -translate-x-1/2 z-50
             md:translate-x-0 md:opacity-100 bg-zinc-900/30 backdrop-blur-md p-4 transition-all duration-300 md:transition-none rounded-br-2xl rounded-bl-2xl ${scrolled ? " top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li><a href="#beranda" className="sm:text-lg text-base font-medium hover:text-violet-500 transition-all duration-300">Beranda </a></li>
                <li><a href="#tentang" className="sm:text-lg text-base font-medium hover:text-violet-500 transition-all duration-300">Tentang</a></li>
                {/* <li><a href="#proyek" className="sm:text-lg text-base font-medium hover:text-violet-500 transition-all duration-300">Proyek</a></li> */}
                <li><a href="#experience" className="sm:text-lg text-base font-medium hover:text-violet-500 transition-all duration-300">Pengalaman</a></li>
                <li><a href="#kontak" className="sm:text-lg text-base font-medium hover:text-violet-500 transition-all duration-300">Kontak</a></li>
            </ul>
        </div >
    )
}

export default Navbar