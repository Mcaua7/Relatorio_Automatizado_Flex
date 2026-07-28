import api from "./axios";

export async function sincronizarAlunos() {
    const { data } = await api.post("/sincronizar");
    return data;
}

export async function relatorio() {
    const { data } = await api.get("/relatorio");
    return data;
}

export async function marcarPresencas() {
    const { data } = await api.patch("/presencas");
    return data;
}

export async function alunosDessincornizados() {
    const { data } = await api.get("/alunosDessincronizados");
    return data;
}

export async function alunosDiaEspec(dia) {
    const {data} = await api.get(`/aulasDoDia?dia=${dia}`)
    return data
}