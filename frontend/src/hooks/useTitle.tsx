import { useMatches } from "react-router-dom";

// A lógica aqui é pegar o título da página a partir do id da rota atual, que é definido no router.tsx. Se não tiver um id definido, ou se não tiver matches, retorna "LeadFlow" como título padrão.
export function usePageTitle() {
    const matches = useMatches();
    const currentMatch = matches[matches.length - 1];
    return currentMatch.id || "LeadFlow";
}