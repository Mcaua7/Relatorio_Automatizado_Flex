import { useEffect, useState } from "react";
import { sincronizarAlunos } from "../../api/relatorioAxios";
import { pegarDataAtual } from "../../utils/dataDeHoje";
import {
    SyncStyle,
    AlunosDoDiaStyle,
    BtnDiv,
    Loader,
    LoaderCell,
} from "./style";
import { FiRefreshCw } from "react-icons/fi";
import { formatarData } from "../../utils/formartarData";
import { GiLookAt } from "react-icons/gi";

function SincronizarAlunos() {
    const dataAtual = pegarDataAtual();
    const [alunosDeHoje, setAlunosDeHoje] = useState([]);
    const [sinc, setSinc] = useState(false);
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);

    async function atualizarSinc() {
        setLoading(true);
        try {
            const dados = await sincronizarAlunos();

            setAlunosDeHoje(dados.data);
            setSinc(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        atualizarSinc();
    }, []);

    return (
        <SyncStyle>
            <div>
                <h2>
                    {!sinc
                        ? "Atualize para verificar as aulas:"
                        : "Aulas do dia:"}
                </h2>
                <BtnDiv>
                    <button
                        onClick={atualizarSinc}
                        disabled={loading}
                        aria-label="Atualizar"
                        title="Atualizar"
                    >
                        <FiRefreshCw />
                        Sincronizar
                    </button>
                </BtnDiv>
            </div>
            <AlunosDoDiaStyle>
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Aluno</th>
                            <th>Módulo</th>
                            <th>Aula</th>
                            <th>Horário</th>
                        </tr>
                    </thead>
                    {!loading ? (
                        <tbody>
                            {!alunosDeHoje ||
                            alunosDeHoje?.length === 0 ||
                            alunosDeHoje?.includes("Nenhum aluno marcado") ? (
                                <tr>
                                    <td colSpan={6}>Sem aula marcada</td>
                                </tr>
                            ) : (
                                alunosDeHoje?.map((e) => {
                                    return (
                                        <tr key={e.id}>
                                            <td>{e.nome}</td>
                                            <td>{e.modulo}</td>
                                            <td>{e.aula}</td>
                                            <td>{e.horario}</td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan={4}>
                                    <LoaderCell>
                                        <Loader></Loader>
                                    </LoaderCell>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </AlunosDoDiaStyle>
        </SyncStyle>
    );
}

export default SincronizarAlunos;
