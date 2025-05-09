import {createContext, useContext, useState} from 'react';

const GiftContext = createContext();

export const GiftProvider = ({children}) => {

    const [surprise, setSurprise] = useState(
        {
            game:"Cricket",
            captain: "Dhoni"
        }
    );

    return (
        <GiftContext.Provider value={{surprise, setSurprise}}>
            {children}
        </GiftContext.Provider>
    );
}

export const useData = () => {
    return useContext(GiftContext);
}
