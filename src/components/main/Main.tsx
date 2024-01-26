import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import datadb from '../../data/projects.json'
import CardProjeto from "./Cards/CardProjeto";
import CardCertificado from "./Cards/CardCerficado";
import CardsHabilidades from "./Cards/CardsHabilidades";
import { VscGithub } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";


interface iProjetosProps {
    stack?: String,
    nome?: String,
    descricao?: String,
    site?: String,
    repositorio?: String,
    imagem?: String,
    status?: String
}

interface iCertificacoesProps {
    nome?: String,
    instituicao?: String,
    duracao?: String,
    conclusao?: String,
    nivel?: String,
    certificado?: String
}


function Main() {
    const [sliderPerView, setsliderPerView] = useState(1)
    const [extendHabilidades, setextendHabilidades] = useState(false)
    const [dataProjetos, setDataProjetos] = useState<iProjetosProps[]>([]);
    const [dataCertificacoes, setDataCertificacoes] = useState<iCertificacoesProps[]>([]);

    useEffect(() => {
        setDataProjetos(datadb.projetos)
        setDataCertificacoes(datadb.certificacoes)
        function handleResize() {
            if (window.innerWidth > 1600) {
                setsliderPerView(3)
            } else if (window.innerWidth > 1024) {
                setsliderPerView(2)
            } else {
                setsliderPerView(1)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleExtendHabilidade = () => {
        setextendHabilidades(!extendHabilidades)
    }
    return (
        <>
            <main className="w-full h-auto bg-slate-500">
                {/* Pagina Home */}
                <section className="w-full h-[80vh] background-home relative flex justify-center items-center" id="home">
                    <div className=" w-full h-full absolute flex justify-center items-center">
                        <section className="w-[1000px] h-[200px] text-center mb-[100px] md:text-start md:pl-[100px] lg:p-0">
                            <h3 className=" h-[3.2rem] font-medium text-[3rem] text-white md:text-[4rem] md:h-[4.2rem]">Kaynan Wallen</h3>
                            <h4 className=" text-verde text-[2rem] md:text-[3rem]  text-shadow-sombreado-verde">Desenvolvedor Web</h4>
                            <section className="flex flex-row gap-5 justify-center md:justify-start">
                                <a href='https://github.com/KaynanWallen' target="_blank">
                                    <VscGithub className="text-white p-2 w-[50px] h-[50px] rounded-2xl cursor-pointer border-2 hover:text-verde border-verde hover:shadow-sombreado-verde2" />
                                </a>
                                <a href='https://www.linkedin.com/in/kaynan-wallen-9b542024a/' target="_blank">
                                    <SlSocialLinkedin className="text-white p-2 w-[50px] h-[50px] rounded-2xl cursor-pointer border-2 hover:text-verde border-verde hover:shadow-sombreado-verde2" />
                                </a>

                                <a>
                                    <FaInstagram className="text-white p-2 w-[50px] h-[50px] rounded-2xl cursor-pointer border-2 hover:text-verde border-verde hover:shadow-sombreado-verde2" />
                                </a>
                            </section>
                        </section>
                        <div className="line"></div>
                    </div>

                </section>


                {/* Pagina Sobre mim */}
                <section className="w-full  bg-preto-escuro flex flex-col gap-10 items-center justify-around text-white py-[80px] relative lg:flex-row" id="about">
                    <h3 className="text-[4rem] text-verde">Sobre Mim</h3>
                    <p className="w-[90%] text-center md:max-w-[600px] lg:max-w-[700px]">Olá! Eu sou Kaynan, um apaixonado por desafios e entusiasta do desenvolvimento.
                        Minha jornada no mundo da programação não é apenas sobre códigos, mas sobre enfrentar desafios com otimismo,
                        aprendizado contínuo e dedicação. Sou movido pela curiosidade, o que me impulsiona a explorar soluções criativas e
                        colaborar em ambientes que valorizam a inovação. Com uma mentalidade focada no trabalho em equipe e uma abordagem proativa,
                        estou pronto para contribuir em projetos dinâmicos que buscam ir além do convencional. Vamos criar algo extraordinário juntos! </p>
                    <div className="line"></div>
                </section>


                {/* Pagina Projetos */}
                <section className="w-full h-auto bg-preto-claro flex flex-col items-center gap-10 py-10 pt-[80px] relative" id='projects'>
                    <h3 className="text-[58px] text-verde sm:text-[70px]">Projetos</h3>

                    <section className="text-center">
                        <h5 className="text-[36px] text-verde">Front-End</h5>
                        <Swiper
                            slidesPerView={sliderPerView}
                            pagination={{ clickable: true }}
                            navigation

                            className="w-[90vw] gap-3 md:max-w-[500px] lg:max-w-[1000px] xl:max-w-[1500px]"
                        >

                            {dataProjetos.map((projeto) => (
                                <>
                                    {projeto.stack == 'front-end' && (
                                        <SwiperSlide>
                                            <CardProjeto imagem={projeto.imagem}
                                                nome={projeto.nome}
                                                descricao={projeto.descricao}
                                                site={projeto.site}
                                                repositorio={projeto.repositorio}
                                                status={projeto.status} />
                                        </SwiperSlide>
                                    )}
                                </>
                            ))}

                        </Swiper>
                    </section>


                    {/* Espaço para futuras extensões */}
                    {/* <section className="text-center relative">
                        <h5 className="text-[36px] text-verde">Back-End</h5>
                        <Swiper
                            slidesPerView={sliderPerView}
                            pagination={{ clickable: true }}
                            navigation

                            className="w-[90vw] gap-3 md:max-w-[500px] lg:max-w-[1000px] xl:max-w-[1500px]"
                        >

                            {dataProjetos.map((projeto) => (
                                <>
                                    {projeto.stack == 'back-end' && (
                                        <SwiperSlide>
                                            <CardProjeto nome={projeto.nome} descricao={projeto.descricao} site={projeto.site} repositorio={projeto.repositorio} status={projeto.status} imagem={projeto.imagem} />
                                        </SwiperSlide>
                                    )}
                                </>
                            ))}

                            <SwiperSlide>
                                <div className="w-full h-full flex justify-center items-center">
                                    <div className="w-[350px] h-[400px]  border-verde border-2 shadow-sombreado-verde">

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="w-full h-full flex justify-center items-center">
                                    <div className="w-[350px] h-[400px]  border-verde border-2">

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="w-full h-full flex justify-center items-center">
                                    <div className="w-[350px] h-[400px]  border-verde border-2">

                                    </div>
                                </div>
                            </SwiperSlide>
                            ...
                        </Swiper>
                    </section> */}

                    <div className="line"></div>
                </section>

                {/* Pagina Habilidades*/}

                <section className="flex flex-col items-center bg-preto-escuro py-10 pt-[80px] relative" id="skills">
                    <h3 className="text-[58px] text-verde sm:text-[70px] pb-10">Habilidades</h3>

                    <button className="w-[100px] h-[50px] shadow-sombreado-verde border-verde border-2 absolute bottom-5 right-auto text-white font-semibold cursor-pointer" onClick={() => {
                        handleExtendHabilidade()
                    }}>
                        {!extendHabilidades ? 'Ver Mais' : 'Ver Menos'}
                    </button>

                    <section className={`w-[90vw] ${!extendHabilidades ? 'h-[500px]' : 'h-auto'} lg:w-[1000px] overflow-hidden flex flex-col gap-10 mb-10`}>
                        <CardsHabilidades />
                    </section>
                    <div className="line"></div>
                </section>

                {/* Pagina Habilidades*/}

                <section className="flex flex-col items-center bg-preto-claro py-10 gap-10 relative" id="certifications">
                    <h3 className="text-[54px] text-verde sm:text-[70px]">Certificações</h3>
                    <Swiper
                        slidesPerView={sliderPerView}
                        pagination={{ clickable: true }}
                        navigation

                        className="w-[90vw] gap-3 md:max-w-[500px] lg:max-w-[1000px] xl:max-w-[1500px]"
                    >
                        {dataCertificacoes.map((projeto) => (
                            <>
                                <SwiperSlide>
                                    <CardCertificado nome={projeto.nome}
                                        instituicao={projeto.instituicao}
                                        duracao={projeto.duracao}
                                        conclusao={projeto.conclusao}
                                        nivel={projeto.nivel}
                                        certificado={projeto.certificado} />
                                </SwiperSlide>
                            </>
                        ))}
                        ...
                    </Swiper>

                    <div className="line"></div>
                </section>
            </main>
        </>
    )
}

export default Main
