import React,{useContext,creatContext,useState, createContext} from "react";

const UserContext = createContext(null);

export function UserContxtProvider({children}) {
    const [user,setUser] = useState(null);
    return(
        <UserContext.Provider
            children ={children}
            value={{
                user,
                setUser,
            }}
        />
    );
}

export function useUserContext(){
    const userContext = useContext(UserContext);
    if(!userContext) {
        throw new Error('UserContext.Provider is not found');
    }

    return userContext;
}