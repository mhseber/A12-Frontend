// import { createContext, useContext, useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app } from "../Firebase/Firebase.config";
// // import app from "../firebase.config"; // তোমার Firebase কনফিগার ফাইল

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const auth = getAuth(app);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//         });
//         return () => unsubscribe();
//     }, []);

//     return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => useContext(AuthContext);