import React from 'react'

function Experience() {
    return (
        <div className="experience mt-20 py-6" id="experience">
            <div className="bg-zinc-800 p-6 rounded-xl mt-12 " data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <h1 className="text-2xl font-bold mb-2">
                    High Traffic API System
                </h1>
                <p className="text-sm opacity-50 mb-4">
                    DevOps Engineer • 2023
                </p>
                <p className="text-md mb-4 opacity-80">
                    Mengelola sistem backend dengan traffic tinggi menggunakan
                    arsitektur microservices di GCP.
                </p>
                <div className="mb-4">
                    <h2 className="font-semibold mb-1">Yang saya lakukan:</h2>
                    <ul className="text-sm md:space-y-1 space-y-2">
                        <li>• Membangun CI/CD pipeline untuk otomatisasi deployment tanpa downtime</li>
                        <li>• Mengelola Kubernetes (GKE) dan autoscaling untuk efisiensi resource</li>
                        <li>• Mengimplementasikan sistem queue (Pub/Sub, Cloud Tasks)  </li>
                        <li>• Monitoring & troubleshooting untuk menjaga performa sistem</li>
                        <li>• Automasi operasional menggunakan Bash scripting</li>
                    </ul>
                </div>
                <div className="text-sm text-green-400 ">
                    <p>✔ Zero downtime deployment</p>
                    <p>✔ Mengurangi downtime hingga 0%</p>
                    <p>✔ Mempercepat deployment hingga 80%</p>
                </div>

            </div>
        </div>
    )
}

export default Experience