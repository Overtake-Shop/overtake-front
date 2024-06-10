'use client'
import { useState } from "react";
import styles from "../index.module.scss";
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    const [userForm, setUserForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUserForm(({...userForm, [e.target.name]: e.target.value}))
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        console.log(userForm);
    }

    return (
        <>
            <form onSubmit={(e) => submitLogin(e)} className={`${styles.wrapper}`}>
                <a className={`${styles.title}`}>Connexion</a>
                <Input label={'adresse mail'} name={'email'} value={userForm.email} placeholder={'email'} type={'email'} onChange={(e) => handleChange(e)} isRequired={true}/>
                <Input label={'Mot de passe'} name={'password'} value={userForm.password} placeholder={'Mot de passe'} type={'password'} onChange={(e) => handleChange(e)} isRequired={true}/>
                <Button title={'Connexion'} type={'submit'}/>
                <a>Vous n'avez pas de compte ? <Link href="/auth/register" className={`${styles.hyperlink}`}>Créer un compte</Link></a>
            </form>
        </>
    );
}
