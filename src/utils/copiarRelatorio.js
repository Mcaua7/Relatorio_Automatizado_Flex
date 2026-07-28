import { formatarData } from "./formartarData";
export async function copiar (alunos){
        let texto = 'Relatorio Flex\n\n'

        for(let e of alunos){
            texto += `Nome: ${e.nome}
Data: ${formatarData(e.data)} 
Modulo: ${e.modulo}
Aula: ${e.aula} 
Horario: ${e.horario}   
Status: ${e.status}

`
        }

        try {
            await navigator.clipboard.writeText(texto.replace(/,/g, ''));
            alert("texto copiado")
        } catch (error) {
            alert("Erro ao copiar: ", error)
        }
    };
