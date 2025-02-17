import Card from "../Card";
import { techs } from "./utils/techs";
import { educationData, workExperience } from "./utils/contentData";
import FadeInSection from "../FadeInSection";

const InfoForMe = () => {
    const transition = "transition duration-300 ease-in-out transform hover:scale-105";

    return (
        <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#150927] rounded-3xl text-white min-h-screen shadow">
                <AboutSection transition={transition} />
                <TechSection transition={transition} techs={techs} />
                <EducationSection />
                <WorkExperienceSection />
                <FocusSection />
            </div>
        </FadeInSection>
    );
};

// Componentes auxiliares
const AboutSection = ({ transition }) => (
    <Card title="Sobre mí">
        <AboutContent />
        <ContactLink transition={transition} />
    </Card>
);

const AboutContent = () => (
    <>
        <DescriptionText>
            Desarrollador web enfocado en crear soluciones digitales funcionales y con una experiencia de usuario excepcional.
        </DescriptionText>
        <DescriptionText>
            Experiencia en React, Node.js y MongoDB, construyendo aplicaciones web eficientes y escalables.
            Apasionado por aprender nuevas tecnologías.
        </DescriptionText>
    </>
);

const ContactLink = ({ transition }) => (
    <p className="w-full mt-2 text-purple-500 drop-shadow-glow-purple">
        Contacto: {" "}
        <a className={`hover:text-purple-300 ${transition}`} href="mailto:pereiramateo19@gmail.com">
            pereiramateo19@gmail.com
        </a>
    </p>
);

const TechSection = ({ transition, techs }) => (
    <Card title="Tecnologías">
        <div className="mt-4 flex flex-wrap gap-3">
            {techs.map((tech, index) => (
                <TechItem key={index} tech={tech} transition={transition} />
            ))}
        </div>
    </Card>
);

export const TechItem = ({ tech, transition }) => (
    <span className={`bg-gray-800 px-3 py-1 rounded-full text-sm flex gap-1 items-center justify-center ${transition}`}>
        {tech.icon}
        {tech.name}
    </span>
);

const EducationSection = () => (
    <Card title="Formación">
        <div className="text-gray-400 mt-5">
            <ContentList data={educationData} />
        </div>
    </Card>
);

const WorkExperienceSection = () => (
    <Card title="Experiencia Laboral">
        <div className="text-gray-400 mt-5">
            <ul className="list-disc list-inside">
                {workExperience.map((exp, index) => (
                    <li key={index}>
                        <strong>{exp.company}</strong> {exp.period}
                    </li>
                ))}
            </ul>
        </div>
    </Card>
);

const FocusSection = () => (
    <Card title="Enfoque" isExpirience>
        <DescriptionText>
            Enfoque en la creación de interfaces de usuario intuitivas y atractivas,
            asegurando una experiencia de usuario fluida y agradable.
        </DescriptionText>
        <DescriptionText>
            Experiencia en diseño UX/UI, aplicando principios de diseño centrado en el usuario
            para desarrollar productos digitales que resuelvan problemas reales.
        </DescriptionText>
    </Card>
);

// Componentes comunes reutilizables
const DescriptionText = ({ children }) => (
    <p className="text-gray-300 mt-2">{children}</p>
);

const ContentList = ({ data }) => (
    <ul className="list-disc list-inside">
        {data.map((item, index) => (
            <li key={index}>
                <strong>{item.institution}</strong>
                <ul className="list-none ml-4">
                    {item.programs.map((program, i) => (
                        <li key={i}>{program}</li>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
);

export default InfoForMe;