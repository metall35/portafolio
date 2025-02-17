import { React } from "../Icons"
import { TechItem } from "../InfoForMe"
import { projectsData } from "./utils/contentData";

const Projects = () => {
    return (
        <section className="mt-5 w-full flex flex-col items-center">
            <SectionTitle />

            <div className="w-4/5 flex flex-col lg:flex-row gap-8 mt-5">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

// Componentes auxiliares
const SectionTitle = () => (
    <h2 className="flex gap-2 text-3xl items-center">
        <React /> Proyectos importantes
    </h2>
)

const ProjectCard = ({ project }) => {
    const transition = "transition duration-300 ease-in-out transform hover:scale-105";

    return (
        <article className="w-full flex flex-col lg:flex-row gap-5">
            <ProjectImage src={project.image} alt={project.title} />

            <div className="flex-1">
                <ProjectContent
                    title={project.title}
                    description={project.description}
                    techs={project.techs}
                    url={project.url}
                    transition={transition}
                />
            </div>
        </article>
    )
}

const ProjectImage = ({ src, alt }) => (
    <img
        src={src}
        alt={alt}
        className="w-full lg:w-3/5 rounded-2xl overflow-hidden object-cover"
    />
)

const ProjectContent = ({ title, description, techs, url, transition }) => (
    <>
        <h4 className="text-xl mt-5 lg:mt-0">{title}</h4>
        <p className="text-gray-400 mt-5 max-w-72 lg:max-w-none">{description}</p>

        <TechList techs={techs} transition={transition} />

        <ProjectLink url={url} transition={transition} />
    </>
)

const TechList = ({ techs, transition }) => (
    <div className="mt-4 flex flex-wrap gap-3">
        {techs.map((tech, index) => (
            <TechItem key={index} tech={tech} transition={transition} />
        ))}
    </div>
)

const ProjectLink = ({ url, transition }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-5 px-4 py-2 inline-block border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500/35 hover:text-white ${transition}`}
    >
        Ver Página
    </a>
)

export default Projects