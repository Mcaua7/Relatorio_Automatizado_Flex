import { useEffect, useState } from "react";
import axios from "axios";
import ClipBoardRelatorio from "./components/relatorioClipBoard";
import SincronizarAlunos from "./components/sincroniarAlunos";
import { Container, Header } from "./style";
function App() {
    return (
        <Container>
            <Header>
                <h1>Relatório de Presenças</h1>
            </Header>
            <div>
                <SincronizarAlunos />
                <ClipBoardRelatorio />
            </div>
        </Container>
    );
}

export default App;
