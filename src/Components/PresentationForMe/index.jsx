"use client"
import Image from 'next/image';
import { FiDownload } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter'

const TypewriterCode = ({ words, cursor = false, speed = 80}) => {
    return (
        <Typewriter words= {words} loops={1} cursor={cursor} typeSpeed={speed} />
    )
}

const PresentationForMe = () => {
    const glowEffect = "drop-shadow-glow-purple";
    const purpleAccent = "text-purple-500";

    return (
        <div className="flex items-center justify-center gap-8 flex-wrap p-4 w-full">
            {/* Sección de la imagen */}
            <div className="text-purple-600 font-bold items-center flex flex-col">
                <Image
                    src={"/avatar.png"}
                    alt="Avatar de Mateo Pereira"
                    width={150}
                    height={150}
                    className={`rounded-lg transition-transform duration-300 hover:scale-105 ${glowEffect}`}
                />
                <p className="text-lg mt-2">FrontEnd Developer</p>
            </div>

            {/* Sección del texto */}
            <div className="flex flex-col gap-4 max-w-md">
                <h1 className="text-2xl font-medium ">
                    ¡Hola!, soy{" "}
                    <span className={`${purpleAccent} ${glowEffect}`}>
                        Mateo Pereira {" "}
                    </span>
                    <small className="text-sm opacity-80 italic">metall</small>
                </h1>

                <h2 className="text-3xl font-semibold leading-tight">
                    Escribe código que se vea tan bien como
                    <span className={`${purpleAccent} ${glowEffect}`}> <TypewriterCode words={["funcionar..."]} cursor /></span>
                </h2>

                <p className="text-md text-gray-300/90 italic">
                    <TypewriterCode words={["Porque si la interfaz no cautiva, ¿qué más lo hará?"]} speed={70} />
                </p>

                {/* Icono para descargar el CV */}
                <a
                    href="/CV Mateo Pereira.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors duration-300 group"
                >
                    <FiDownload className="text-2xl transition-transform duration-300 fill-transparent" />
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Descargar CV</span>
                </a>
            </div>
        </div>
    );
};

export default PresentationForMe;