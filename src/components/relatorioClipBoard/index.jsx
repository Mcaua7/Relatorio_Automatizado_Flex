import { useEffect, useState } from "react";
import axios from "axios";
import { formatarData } from "../../utils/formartarData";
import { copiar } from "../../utils/copiarRelatorio";
import { relatorio, marcarPresencas } from "../../api/relatorioAxios";
import { RelatorioStyle, ResultRelatorio, BtnDiv, Status, Loader, LoaderCell } from "./style";
import { FaRegCopy } from "react-icons/fa";
import { IoCheckboxOutline } from "react-icons/io5";

function ClipBoardRelatorio() {
    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(false);

    async function carregar() {
        setLoading(true);
        try {
            const dados = await relatorio();
            setAlunos(dados.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    async function presenca() {
        setLoading(true);
        try {
            const dados = await marcarPresencas();
        } catch (error) {
            console.error(error);
        }finally {
            setLoading(false);
        }
    }

    async function reloadPresenca() {
        try{
            await presenca()
        }catch (error){
            console.error(error)
        }finally{
            window.location.reload()
        }
    }

    useEffect(() => {
        carregar();
        presenca();
    }, []);

    return (
        <>
            <RelatorioStyle>
                <div>
                    <h2>Relatorio:</h2>
                    <BtnDiv>
                        <button
                            onClick={reloadPresenca}
                            disabled={loading}
                            title="Atualizar relatorio"
                            aria-label="Atualizar relatorio"
                        >
                            <IoCheckboxOutline />
                            Marcar Presenças
                        </button>
                        <button
                            onClick={() => {
                                copiar(alunos);
                            }}
                            disabled={!alunos?.length > 0}
                            aria-label="Copiar relatorio"
                            title="Copiar relatorio"
                        >
                            <FaRegCopy />
                            Copiar
                        </button>
                    </BtnDiv>
                </div>
                <ResultRelatorio>
                    <table>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Nome do Aluno</th>
                                <th>Módulo</th>
                                <th>Aula</th>
                                <th>Horário</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {!loading ? (
                            <tbody>
                                {alunos?.length === 0 ||
                                alunos?.includes("Nenhum aluno marcado") ? (
                                    <tr>
                                        <td colSpan={6}>Sem aula marcada</td>
                                    </tr>
                                ) : (
                                    alunos?.map((e) => {
                                        return (
                                            <tr key={e.id}>
                                                <td>{formatarData(e.data)}</td>
                                                <td>{e.nome}</td>
                                                <td>{e.modulo}</td>
                                                <td>{e.aula}</td>
                                                <td>{e.horario}</td>
                                                <td>
                                                    <Status $status={e.status}>
                                                        {e.status ===
                                                        "Aluno compareceu"
                                                            ? "Presente"
                                                            : "Ausente"}
                                                    </Status>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td colSpan={6}>
                                        <LoaderCell>
                                            <Loader></Loader>
                                        </LoaderCell>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </ResultRelatorio>
            </RelatorioStyle>
        </>
    );
}

export default ClipBoardRelatorio;
