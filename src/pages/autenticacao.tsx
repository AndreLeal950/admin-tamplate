import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function submeter() {
        if (modo === 'login') {
            console.log('ligin');
            
        } else {
            console.log('cadastrar');
        }
    }

    return (
        <div>
            <h1 className={`
                text-lx font-bold mb-5`} >
                {modo === 'login' ? 'Entre com sua conta' : 'Cadastra-se na Plataforma'}
            </h1>
            <AuthInput
                label="Email"
                tipo="email"
                valor={email}
                obrigatorio
                valorMudou={setEmail} />
            
            <AuthInput
                label="Senha"
                tipo="password"
                valor={senha}
                obrigatorio
                valorMudou={setSenha} />
            <button onClick={submeter} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-gray-100 rounded-lg px-3 py-2`} >
                
                {modo === 'login' ? 'Entrar' : 'Cadastrar'}

            </button>
            <hr className="my-6 border-gray-300 w-full" />

             <button onClick={submeter} className={`
                w-full bg-red-500 hover:bg-red-400
                text-gray-100 rounded-lg px-3 py-2`} >
                
                Entrar com Google
            </button>
        </div>
    )
}