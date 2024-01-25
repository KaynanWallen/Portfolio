import home from '/img/home.png'
import about from '/img/about.png'
import certificados from '/img/certificados.png'
import habilidades from '/img/habilidades.png'
import projetos from '/img/projetos.png'
import menu from '/img/menu.png'
import { useState } from 'react'

function Header() {
    const [menuEspansivo, setmenuEspansivo] = useState(true)

    const scrollToId = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    function handleClickMenu() {
        setmenuEspansivo(!menuEspansivo)
    }

    return (
        <>
            <header className="w-full h-[70px] bg-preto-escuro fixed top-0 z-10 border-b-2 border-verde">
                <section className=" w-full h-full text-white text-[22px] flex flex-row justify-end items-center gap-5 md:justify-center px-5">
                    <a className="underline-on-hover" href="#" onClick={() => scrollToId('home')}>
                        <span className='hidden md:flex menu-header cursor-pointer'>Home </span>
                    </a>
                    <a className="underline-on-hover" href="#" onClick={() => scrollToId('about')}>
                        <span className='hidden md:flex menu-header cursor-pointer'>Sobre mim </span>
                    </a>

                    <a className="underline-on-hover" href="#" onClick={() => scrollToId('projects')}>
                        <span className='hidden md:flex menu-header cursor-pointer'>Projetos </span>
                    </a>

                    <a className="underline-on-hover" href="#" onClick={() => scrollToId('skills')}>
                        <span className='hidden md:flex menu-header cursor-pointer'>Habilidades </span>
                    </a>

                    <a className="underline-on-hover" href="#" onClick={() => scrollToId('certifications')}>
                        <span className='hidden md:flex menu-header cursor-pointer'>Certificados </span>
                    </a>

                    <img className='h-[50px] flex md:hidden' src={menu} onClick={() => {
                        handleClickMenu()
                    }} />
                </section>

                <section className={`w-[50px] h-auto bg-[#0F0F0F] top-[30vh] fixed flex flex-col items-center gap-4 border-verde border-2  border-r-0  md:hidden 
                ${!menuEspansivo ? 'right-[-40px] .transition-left' : 'right-0 transition-right'}`}>
                    <a href="#" onClick={() => scrollToId('home')}>
                        <img className='flex md:hidden w-[35px]' src={home} />
                    </a>
                    <a href="#" onClick={() => scrollToId('about')}>

                        <img className='flex md:hidden w-[35px]' src={about} />
                    </a>
                    <a href="#" onClick={() => scrollToId('projects')}>
                        <img className='flex md:hidden w-[30px]' src={projetos} />

                    </a>
                    <a href="#" onClick={() => scrollToId('skills')}>
                        <img className='flex md:hidden w-[35px]' src={habilidades} />

                    </a>
                    <a href="#" onClick={() => scrollToId('certifications')}>

                        <img className='flex md:hidden w-[35px]' src={certificados} />
                    </a>
                </section>


            </header>
        </>
    )
}

export default Header
