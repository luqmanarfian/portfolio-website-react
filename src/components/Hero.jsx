import React from 'react'
import DataImage from '../data.js'

function Hero() {
    return (
        <div className="hero grid md:grid-cols-2 justify-center items-center pt-5 xl:gap-20 gap-10 grid-cols-1">
            <div className="animate__animated animate__fadeInUp">
                <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
                    <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
                    <q>Bayangan Tidak Akan Pernah Tertinggal.🌑</q>
                </div>
                <h1 className="md:text-5xl/tigh text-4xl/tight md:text-left text-center font-bold mb-6">Hi, Saya Luqman Arfian</h1>
                <p className="md:text-xl/loose text-lg/loose mb-10 md:text-left text-center opacity-80">
                    Saya membantu membangun dan mengelola sistem berbasis cloud yang stabil, scalable, dan siap production.
                    Berfokus pada CI/CD, Kubernetes, dan automasi infrastruktur untuk memastikan aplikasi dapat berjalan secara efisien dan tanpa
                    downtime.
                </p>
                <div className="flex items-center sm:gap-4 gap-2">
                    <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-all duration-300">
                        Download CV <i className="ri-download-cloud-line ml-2 ri-lg"></i>
                    </a>
                    <a href="#kontak" className="bg-zinc-800 p-4 rounded-2xl hover:bg-zinc-700 transition-all duration-300">
                        Hubungi Saya <i className="ri-contacts-fill ml-2 ri-lg"></i>
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center overflow-hidden">
                <img src={DataImage.HeroImage} alt="Hero Image" className="w-[550px] rounded-3xl md:ml-auto animate__animated animate__fadeInRight" loading="lazy" />
            </div>
        </div>
    )
}

export default Hero