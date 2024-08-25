import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {SignInFlow} from "@/features/auth/types";
import { useAuthActions } from "@convex-dev/auth/react";
import {TriangleAlert} from "lucide-react";

// export function SignIn() {
//     const { signIn } = useAuthActions();
//     return (
//         <button onClick={() => void signIn("github")}>Sign in with GitHub</button>
//     );
// }
export interface ISignInCard{
    setState:(state:SignInFlow)=>void;
}
const SignInCard = ({setState}:ISignInCard) => {
    const { signIn } = useAuthActions();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState<boolean>(
        false
    )
    const handleOnPasswordSignIn=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true)
        signIn('password',{email,password,flow:'signIn'}).catch(()=>{
            setErrorMessage("Invalid email or password!")
        }).finally(()=>{
            setLoading(false)
        })
    }
    const handleProviderSignIn=(value:"github"|'google')=>{
        setLoading(true)
        signIn(value).finally(()=>{
            setLoading(false);
        })
    }
    return (
        <Card className={'w-full h-full p-8'}>
            <CardHeader className={'px-0 pt-0'}>
                <CardTitle>Login to continues</CardTitle>
            </CardHeader>
            <CardDescription className={'py-2.5'}>Use your email or another service to continue</CardDescription>
            {
                !!errorMessage && <div className={'bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'}>
                    <TriangleAlert/><p>{errorMessage}</p>
                    </div>
            }
            <CardContent className={'space-y-5 px-0 pb-0'}>
                <form className={'space-y-2.5'} onSubmit={handleOnPasswordSignIn}>
                    <Input
                        disabled={loading}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type={'email'}
                        placeholder={'Email'}
                        required/>
                    <Input
                        disabled={loading}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={'password'}
                        placeholder={'Password'}
                        required/>
                    <Button type={'submit'} className={'w-full'} size='lg' disabled={false}>Continue</Button>
                </form>
                <Separator/>
                <div className={'flex flex-col gap-y-2.5'}>
                    <Button disabled={loading} onClick={() =>handleProviderSignIn('google')} size='lg' className={'w-full relative'} variant='outline'>
                        <FcGoogle size={25} className={'pr-1'}/> Continue With Google</Button>
                </div>
                <div className={'flex flex-col gap-y-2.5'}>
                    <Button disabled={loading} onClick={() => handleProviderSignIn('github')} size='lg' className={'w-full relative'} variant='outline'>
                        <FaGithub size={25} className={'pr-1'}/> Continue With GitHub</Button>
                </div>
                <p className={'text-xs text-muted-foreground'}> Don&apos;t have an account? <span className={'cursor-pointer text-sky-600 hover:underline'} onClick={()=>{setState('signUp')}}>Sign Up</span></p>

            </CardContent>
        </Card>
    );
};

export default SignInCard;
