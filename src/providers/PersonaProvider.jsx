import { PersonaContext } from "../features/persona/personaContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { personaData } from "../data/personaData";

export const PersonaProvider = ({ children }) => {
    const [persona, setPersona] = useLocalStorage("persona", "luqman");

    const togglePersona = () => {
        setPersona(prev => (prev === "luqman" ? "lancy" : "luqman"));
    };

    const currentPersona = personaData[persona] || personaData.luqman;

    const value = {
        persona,
        currentPersona,
        togglePersona
    };

    return (
        <PersonaContext.Provider value={value}>
            {children}
        </PersonaContext.Provider>
    );
};