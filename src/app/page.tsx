"use client"
import {useAuthActions} from "@convex-dev/auth/react"
import {Button} from "@/components/ui/button";

export default function Home() {
 const {signOut}=useAuthActions();
 return  <div>Home Page <Button variant='destructive' onClick={()=>signOut()} >LogOut</Button> </div>
}
