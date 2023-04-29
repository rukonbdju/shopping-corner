import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signOut, sendPasswordResetEmail, sendEmailVerification, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../../firebase.config";
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [profileUpdated, setProfileUpdated] = useState(false);
    const [passwordResetEmail, setPasswordResetEmail] = useState(false)
    const [sentEmail, setSentEmail] = useState(false);
    const [error, setError] = useState({});

    // Google, Github, Facebook Authentication

    const handleSignInWithPopUp = async (option, from, navigate) => {
        try {
            let provider;
            if (option === 'google') {
                provider = googleProvider;
            }
            if (option === 'facebook') {
                provider = facebookProvider;
            }
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            user.emailVerified = true;
            if (user) {
                setUser(user);
                navigate(from, { replace: true });
            }
        } catch {
            (error) => {
                console.log(error)
                setError(error)
            }

        }

    }

    //Update user profile (only name)

    const handleUpdateProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            setProfileUpdated
        }).catch((error) => {
            console.error(error)
        });
    }

    //Email varification for new user

    const handleSendEmailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setSentEmail(true)
                setUser(auth.currentUser)
            })
            .catch(err => console.error(err))
    }

    //Create new user with email and password

    const handleCreateUserWithEmailAndPassword = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                handleUpdateProfile(name)
                handleSendEmailVerification();
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                setError(error)
            });
    }

    //sign in with email and password

    const handleSignInWithEmailAndPassword = (email, password, from, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                if (user.emailVerified === true) {
                    navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                setError(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });

    }

    //User logout

    const handleLogOut = (navigate) => {
        signOut(auth).then(() => {
            setUser(null)
            navigate('/')
        }).catch((error) => {
            setError(error)
        })
    }

    //Reset password by sending email

    const handlePasswordResetEmail = (email) => {

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setPasswordResetEmail(true)
            })
            .catch((error) => {
                console.error(error);
            })
    }


    //get the state of user weather is loged in or not

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser(null)
            }
            setLoading(false)
        });
    }, [auth])

    const authInfo = {user, loading, error, sentEmail, passwordResetEmail , handleCreateUserWithEmailAndPassword, handleSignInWithPopUp, handleSignInWithEmailAndPassword, handleLogOut, handlePasswordResetEmail }
    //return all the fuction and user and auth information
    return authInfo ;
}

export default useFirebase;