import { FaArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";
import { GrNotification } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { Button, Container, Input, InputGroup } from "reactstrap";
import { usePageTitle } from "../../hooks/useTitle";

export default function TopBar({toggleSidebar}: {toggleSidebar: () => void}) {
    const title = usePageTitle();
    return (
        <div className="topbar">
            <Container className="containerLeft">
                <button className="arrowLeft">

                <FaArrowLeft onClick={toggleSidebar} className="mr-3" /> 
                
                </button>
                <h2>{title}</h2>
                </Container>
            <Container className="containerRight">
                <div className="search-box">
                    <InputGroup>
                        <Button color="secondary">
                            <FaMagnifyingGlass />
                        </Button>
                        <Input />
                    </InputGroup>
                </div>
                <Button><GrNotification /></Button> {/* Botão de notificações */ }
                <Button><RxAvatar /></Button> {/* Botão de perfil */ }
            </Container>
        </div>
    )
}

// Titulo da página será dinâmico, dependendo da rota, mas por enquanto é só um placeholder mesmo.