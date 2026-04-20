import { PersonaContext } from "../features/persona/personaContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { personaData } from "../data/personaData";

export const PersonaProvider = ({ children }) => {
    const [persona, setPersona] = useLocalStorage("persona", "luqman");

    const togglePersona = () => {
        setPersona(prev => (prev === "luqman" ? "lancy" : "luqman"));
    };

    const currentPersona = personaData[persona];

    return (
        <PersonaContext.Provider
            value={{
                persona,
                currentPersona,
                togglePersona
            }}
        >
            {children}
        </PersonaContext.Provider>
    );
};