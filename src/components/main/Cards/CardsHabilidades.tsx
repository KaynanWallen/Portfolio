import { FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { LiaNode } from "react-icons/lia";
import { SiMongodb } from "react-icons/si";

function CardsCertificado() {
    return (
        <>
            <section className="flex flex-col-reverse gap-5 items-center justify-around lg:flex-row">
                <div className="w-full flex flex-col gap-5 sm:w-[500px]">
                    <h4 className="text-[36px] text-verde text-center font-semibold lg:text-start">TypeScript</h4>
                    <p className="text-center text-white lg:text-start">TypeScript, desenvolvido pela Microsoft, é uma linguagem de programação de código aberto que atua como um superconjunto sintático estrito de JavaScript. Ele introduz tipagem estática opcional, proporcionando maior segurança e eficiência durante o desenvolvimento. Com a capacidade de compilar para JavaScript puro, o TypeScript oferece flexibilidade e compatibilidade com o vasto ecossistema existente. </p>
                </div>
                <div className="w-[300px] h-[150px]  hidden lg:flex justify-center items-center">
                    <FaLinkedin className="w-[300px] h-full" color="#FF9B59" />
                </div>
            </section>

            <section className="flex flex-col-reverse gap-5 items-center justify-around lg:flex-row">
                <div className="w-full flex flex-col gap-5 sm:w-[500px]">
                    <h4 className="text-[36px] text-verde text-center font-semibold lg:text-start">JavaScript</h4>
                    <p className="text-center text-white lg:text-start">JavaScript, a linguagem de programação essencial para o desenvolvimento web, é conhecida por sua versatilidade e ampla implementação nos navegadores. Sintaxe simples e dinamismo são marcas registradas, permitindo a criação de interações dinâmicas em páginas web. Amplamente suportado, o JavaScript desempenha um papel crucial no desenvolvimento front-end e, cada vez mais, no back-end através de ambientes como o Node.js. </p>
                </div>
                <div className="w-[300px] h-[150px]  hidden lg:flex justify-center items-center">
                    <IoLogoJavascript className="w-[300px] h-full" color="#FF9B59" />
                </div>
            </section>

            <section className="flex flex-col-reverse gap-5 items-center justify-around lg:flex-row">
                <div className="w-full flex flex-col gap-5 sm:w-[500px]">
                    <h4 className="text-[36px] text-verde text-center font-semibold lg:text-start">React</h4>
                    <p className="text-center text-white lg:text-start">React é uma biblioteca JavaScript declarativa, eficiente e flexível, projetada para construir interfaces de usuário interativas e escaláveis. Sua abordagem baseada em componentes facilita a criação de UIs complexas, dividindo a interface em pequenos e isolados blocos chamados "componentes". Com uma virtual DOM eficiente, o React otimiza a renderização, oferecendo uma experiência de usuário fluida. </p>
                </div>
                <div className="w-[300px] h-[150px]  hidden lg:flex justify-center items-center">
                    <FaReact className="w-[300px] h-full" color="#FF9B59" />
                </div>
            </section>

            <section className="flex flex-col-reverse gap-5 items-center justify-around lg:flex-row">
                <div className="w-full flex flex-col gap-5 sm:w-[500px]">
                    <h4 className="text-[36px] text-verde text-center font-semibold lg:text-start">React Native</h4>
                    <p className="text-center text-white lg:text-start">TReact Native estende os princípios do React para o desenvolvimento mobile, permitindo a criação de aplicativos nativos usando JavaScript e React. Compartilhando lógica de negócios e componentes entre as plataformas iOS e Android, React Native proporciona eficiência no desenvolvimento mobile, mantendo a qualidade e desempenho de aplicativos nativos. </p>
                </div>
                <div className="w-[300px] h-[150px]  hidden lg:flex justify-center items-center">
                    <TbBrandReactNative className="w-[300px] h-full" color="#FF9B59" />
                </div>
            </section>

            <section className="flex flex-col-reverse gap-5 items-center justify-around lg:flex-row">
                <div className="w-full flex flex-col gap-5 sm:w-[500px]">
                    <h4 className="text-[36px] text-verde text-center font-semibold lg:text-start">NodeJs</h4>
                    <p className="text-center text-white lg:text-start">Node.js revolucionou o desenvolvimento back-end ao permitir a execução de JavaScript do lado do servidor. Baseado no motor V8 do Google Chrome, o Node.js oferece alta escalabilidade e desempenho assíncrono, adequando-se bem a aplicações em tempo real. Com um ecossistema robusto de pacotes (npm), Node.js é uma escolha popular para construir servidores e APIs eficientes. </p>
                </div>
                <div className="w-[300px] h-[150px]  hidden lg:flex justify-center items-center">
                    <LiaNode className="w-[300px] h-full" color="#FF9B59" />
                </div>
            </section>

            <section className="flex flex-col-reverse gap-5 items-center justify-around lg:flex-row">
                <div className="w-full flex flex-col gap-5 sm:w-[500px]">
                    <h4 className="text-[36px] text-verde text-center font-semibold lg:text-start">MongoDB</h4>
                    <p className="text-center text-white lg:text-start">MongoDB, classificado como um banco de dados NoSQL, é conhecido por sua estrutura flexível baseada em documentos JSON-like. Ideal para aplicações escaláveis e que demandam esquemas dinâmicos, o MongoDB oferece alta performance e escalabilidade horizontal. Sua abordagem sem tabelas tradicionais e a capacidade de lidar com grandes volumes de dados fazem dele uma escolha popular para aplicações modernas. </p>
                </div>
                <div className="w-[300px] h-[150px]  hidden lg:flex justify-center items-center">
                    <SiMongodb className="w-[300px] h-full rotate-45" color="#FF9B59" />
                </div>
            </section>
        </>
    )
}

export default CardsCertificado