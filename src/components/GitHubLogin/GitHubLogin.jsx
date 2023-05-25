import React, { useContext } from 'react';
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const GithubLogin = () => {

    const { signInWithGithub } = useContext(AuthContext);
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div >
            <div className="flex justify-center">
                <div className=" bg-sky-50 rounded-xl w-2/3 p-2">
                    <button onClick={handleGithubSignIn} className="flex items-center text-blue-700 gap-2">
                        <FaGithub></FaGithub> Sign in with Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GithubLogin;