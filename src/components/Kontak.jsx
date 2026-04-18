import React from 'react'

function Kontak() {
    return (
        <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
            <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
            <p className="text-center text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dan berkolaborasi ! </p>
            <form action="https://formsubmit.co/luqman.arfian5@gmail.com" method="POST" className="bg-zinc-800 sm:w-fit w-full sm:p-10 p-5 mx-auto rounded-md mt-6" autoComplete="off"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nama" className="font-semibold">Nama Lengkap</label>
                        <input type="text" name="Nama Lengkap" id="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input type="email" name="Email" id="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="pesan" className="font-semibold">Pesan</label>
                    <textarea name="Pesan" id="pesan" placeholder="Masukkan Pesan..." cols="45" rows="7" className="border border-zinc-500 p-2 rounded-md" required></textarea>
                </div>
                <input type="hidden" name="_url" value="https://luqmanarfian.online"></input>
                <div className="text-center mt-6">
                    <button type="submit" className=" bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600 transition-all duration-300">Kirim Pesan</button>
                </div>
            </form>
        </div>
    )
}

export default Kontak