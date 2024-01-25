import { useEffect, useState } from "react"

interface CardProjetoProps {
    nome?: String,
    descricao?: String,
    site?: String,
    repositorio?: String,
    imagem?: String,
    status?: String
}

function CardProjeto({ nome, descricao, site, repositorio, imagem, status }: CardProjetoProps) {
    const [CardFlip, setCardFlip] = useState(false)
    const handleMouseEnter = () => {
        setCardFlip(true);
    };

    const handleMouseLeave = () => {
        setCardFlip(false);
    };

    useEffect(() => {
        console.log(imagem)
    }, [])

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[250px] h-[400px]  border-verde border-2 flex flex-col items-center py-5 gap-2 shadow-sombreado-verde relative cursor-pointer mini:w-[350px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {!CardFlip ? (
                    <>
                        <img className="w-[90%]" src={imagem?.toString()} alt="Projeto Trás" />
                        <p className="w-[90%] text-[24px] text-verde font-bold text-start">{nome}</p>
                        <p className="w-[90%] text-white text-start">
                            {descricao}
                        </p>
                    </>

                ) : (
                    <>

                        <h4 className="text-[24px] text-verde mt-[50px] font-bold">{nome}</h4>
                        <a className="underline-on-hover" href={site?.toString()} target="_blank">
                            <h4 className="text-[24px] text-white cursor-pointer">Site</h4>
                        </a>
                        <a className="underline-on-hover" href={repositorio?.toString()} target="_blank">
                            <h4 className="text-[24px] text-white cursor-pointer">Repositório</h4>
                        </a>
                        <a href={status?.toString()} target="_blank">
                            <h4 className="text-[24px] text-verde font-bold absolute left-2 bottom-0">Concluido</h4>
                        </a>
                    </>

                )}
            </div>
        </div>
    )
}

export default CardProjeto