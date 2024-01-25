interface iCertificacoesProps {
    nome?: String,
    instituicao?: String,
    duracao?: String,
    conclusao?: String,
    nivel?: String,
    certificado?: String
}


function CardCertificado({nome, instituicao, duracao, conclusao, nivel, certificado} : iCertificacoesProps) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[250px] h-[300px]  border-verde border-2 p-5 flex flex-col gap-6 shadow-sombreado-verde">
                <h4 className="text-[24px] text-verde mt-[20px]">{nome}</h4>
                <section>
                    <p className=" text-[#7E7E7E] text-[12px]">Instituição:<span className="text-white p-1 text-[14px]">{instituicao}</span></p>
                    <p className=" text-[#7E7E7E] text-[12px]">Duração:<span className="text-white p-1 text-[14px]">{duracao}</span></p>
                    <p className=" text-[#7E7E7E] text-[12px]">Conclusão:<span className="text-white p-1 text-[14px]">{conclusao}</span></p>
                    <p className=" text-[#7E7E7E] text-[12px]">Nivel:<span className="text-white p-1 text-[14px]">{nivel}</span></p>
                    <p className=" text-[#7E7E7E] text-[12px]">Certificado:<span className="text-white p-1 text-[14px]">{certificado}</span></p>
                </section>
            </div>
        </div>
    )
}

export default CardCertificado