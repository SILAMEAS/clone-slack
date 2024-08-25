import React, {useState} from 'react';
import {SignInFlow} from "@/features/auth/types";
import {ISignInCard} from "@/features/auth/components/sign-in-card";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
interface ISignUpCard extends ISignInCard{}
const SignUpCard = ({setState}:ISignInCard) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [ConfirmPassword, setConfirmPassword] = useState<string>("")
    return (
        <Card className={'w-full h-full p-8'}>
            <CardHeader className={'px-0 pt-0'}>
                <CardTitle>Sign Up to continues</CardTitle>
            </CardHeader>
            <CardDescription className={'py-2.5'}>Use your email or another service to continue</CardDescription>
            <CardContent className={'space-y-5 px-0 pb-0'}>
                <form className={'space-y-2.5'}>
                    <Input
                        disabled={false}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type={'email'}
                        placeholder={'Email'}
                        required/>
                    <Input
                        disabled={false}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={'password'}
                        placeholder={'Password'}
                        required/>
                    <Input
                        disabled={false}
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type={'password'}
                        placeholder={'Confirm Password'}
                        required/>
                    <Button type={'submit'} className={'w-full'} size='lg' disabled={false}>Continue</Button>
                </form>
                <Separator/>
                <div className={'flex flex-col gap-y-2.5'}>
                    <Button disabled={false} onClick={() => {
                    }} size='lg' className={'w-full relative'} variant='outline'>
                        <FcGoogle size={25} className={'pr-1'}/> Continue With Google</Button>
                </div>
                <div className={'flex flex-col gap-y-2.5'}>
                    <Button disabled={false} onClick={() => {
                    }} size='lg' className={'w-full relative'} variant='outline'>
                        <FaGithub size={25} className={'pr-1'}/> Continue With GitHub</Button>
                </div>
                <p className={'text-xs text-muted-foreground'}>Already have an account? <span className={'cursor-pointer text-sky-600 hover:underline'} onClick={()=>{setState('signIn')}}>Login</span></p>

            </CardContent>
        </Card>
    );
};

export default SignUpCard;
