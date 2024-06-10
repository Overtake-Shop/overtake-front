'use client'
import { useState } from "react";
import styles from "../index.module.scss";
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
import Link from "next/link";

export default function Page() {
    const [userForm, setUserForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUserForm(({...userForm, [e.target.name]: e.target.value}))
    }

    const submitRegister = async (e) => {
        e.preventDefault();
        console.log(userForm);
    }

    return (
        <form onSubmit={(e) => submitRegister(e)} className={`${styles.wrapper}`}>
            <a className={`${styles.title}`}>Créer un compte</a>
            <Input label={'Prénom'} name={'firstName'} value={userForm.firstName} placeholder={'Prénom'} type={'text'} onChange={(e) => handleChange(e)} isRequired={true}/>
            <Input label={'lastName'} name={'lastName'} value={userForm.lastName} placeholder={'Nom'} type={'email'} onChange={(e) => handleChange(e)} isRequired={true}/>
            <Input label={'adresse mail'} name={'email'} value={userForm.email} placeholder={'email'} type={'email'} onChange={(e) => handleChange(e)} isRequired={true}/>
            <Input label={'Mot de passe'} name={'password'} value={userForm.password} placeholder={'Mot de passe'} type={'password'} onChange={(e) => handleChange(e)} isRequired={true}/>
            <Button title={'Créer un compte'} type={'submit'}/>
            <a>Vous avez déja un compte ? <Link href="/auth/login" className={`${styles.hyperlink}`}>Se connecter</Link></a>
        </form>
    );
}
