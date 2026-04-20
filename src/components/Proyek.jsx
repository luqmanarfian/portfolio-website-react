import { listProyek } from '../data/appData.js'

function Proyek() {
    return (
        <div className="proyek mt-32 py-10" id="proyek">
            <h1 className="text-center text-4xl/snug font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
            <p className="text-center text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut adalah beberapa proyek yang pernah saya buat </p>
            <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {listProyek.map(proyek => (
                    <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
                        <img src={proyek.gambar} alt="Proyek Image" className="rounded-md" loading="lazy" />
                        <div className="flex flex-col h-full">
                            <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                            <p className="text-base/loose opacity-50 mb-4">{proyek.desk}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {proyek.tools.map((tool, index) => (
                                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                                ))}
                            </div>
                            <div className="text-center mt-auto">
                                <a href="#" className=" bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 transition-all duration-300">Lihat Proyek</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}

export default Proyek