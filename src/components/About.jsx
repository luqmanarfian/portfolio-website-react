import DataImage from '../data.js'

function About() {
    return (
        <div className="tentang mt-20 py-10" id="tentang">
            <div className="xl:w-2/3 lg:w-4/5 w-full mx-auto p-7 bg-zinc-800 rounded-lg "
                data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
                <p className="text-base/loose mb-10">
                    Saya adalah DevOps Engineer yang terbiasa membangun dan mengelola sistem berbasis cloud agar aplikasi dapat
                    berjalan dengan stabil, scalable, dan efisien. Saya sering bekerja dengan CI/CD pipeline, Kubernetes, serta sistem
                    asynchronous untuk mendukung performa aplikasi. Selain itu, saya juga memiliki pengalaman di Web Development,
                    sehingga memahami proses pengembangan dari sisi aplikasi hingga infrastruktur. Saat ini saya menjalani kuliah sambil
                    bekerja, yang membuat saya terbiasa belajar cepat, mengatur waktu dengan baik, dan terus berkembang mengikuti dunia
                    teknologi.
                </p>
                <div className="flex items-center justify-between">
                    <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
                    <div className="flex gap-10 items-center  ">
                        {/* <div>
                            <h1 className="text-4xl mb-1">
                                45 <span className="text-violet-500">+</span>
                            </h1>
                            <p>Proyek Selesai</p>
                        </div> */}
                        <div>
                            <h1 className="text-4xl mb-1">
                                3 <span className="text-violet-500">+</span>
                            </h1>
                            <p>Tahun Pengalaman</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >)
}

export default About