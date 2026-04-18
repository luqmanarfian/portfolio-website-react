import { listTools } from '../data.js'

function Tools() {
    return (
        <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools Yang dipakai</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-4/5 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut adalah beberapa tools yang biasa saya gunakan dalam pembuatan website </p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {listTools.map(tool => (
                    <div className="flex items-center gap-2 p-3 
            border border-zinc-600 rounded-xl hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-300 group" key={tool.id} data-aos-once="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} >
                        <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 transition-all duration-300" loading="lazy" />
                        <div>
                            <h1 className="font-bold">{tool.nama}</h1>
                            <p className="text-sm opacity-50">{tool.ket}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}

export default Tools