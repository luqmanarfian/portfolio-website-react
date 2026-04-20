import { usePersona } from "../features/persona/usePersona";

function Footer() {
    const { currentPersona } = usePersona();
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col justify-between items-center gap-6 md:gap-0">
            <h1 className="text-center md:text-2xl text-lg font-bold">{currentPersona.name}</h1>
            <div className="flex gap-7">
                <a href="#beranda" className="hover:text-violet-500 transition-all duration-300">Beranda</a>
                <a href="#tentang" className="hover:text-violet-500 transition-all duration-300">Tentang</a>
                <a href="#proyek" className="hover:text-violet-500 transition-all duration-300">Proyek</a>
            </div>
            <div className="flex items-center justify-center gap-3">
                <a href="https://github.com/LuqmanArfian" className="text-2xl hover:text-violet-500 transition-all duration-300"><i className="ri-github-fill ri-lg opacity-10"></i></a>
                <a target="_blank" href="https://www.instagram.com/lancy.06/" className="text-2xl hover:text-violet-500 transition-all duration-300"><i className="ri-instagram-fill ri-lg opacity-50"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/luqman-arfian/" className="text-2xl hover:text-violet-500 transition-all duration-300"><i className="ri-linkedin-fill ri-lg opacity-50"></i></a>
            </div>
        </div>
    )
}

export default Footer