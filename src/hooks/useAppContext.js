// Criando o Hook que vai ser usado para chamar o contexto

import { useContext } from "react";
import { AppContextState } from "../context/AppContext";

export default function useAppContext () {
    const context = useContext(AppContextState) //Chama o contexto criado na pasta context

    if (context === undefined) {
        throw new Error('Nao esta dentro do contexto')
    }
    return context
}