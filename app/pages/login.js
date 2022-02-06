import styles from '../styles/Login.module.css'

export default function Login() {

    const [failed, setFailed] = useState()
    const [spamTimer, setSpamTimer] = useState()

    function login() {
        clearTimeout(spamTimer)
        setSpamTimer(setTimeout(() => setFailed(false), 500));
        fetch('/api/login', {"method": "POST", "body": JSON.stringify({
            "username": document.getElementById('username').value,
            "password": document.getElementById('password').value
        })}).then(res => {
            if(res.status === 200) return res.json()
            else return {}
        }).then(json => {
            setFailed(!json.authenticated)
            if(json.authenticated) window.location.href = '/';
            else {
                document.getElementById('username').value = ''
                document.getElementById('password').value = ''
            }
        })
    }

    return (
        <div className={styles.center}>
            <div className={styles.form}>
                <h1 className={failed ? styles.failed: null}>Login</h1>
                <input autocomplete='off' type='username' id='username' placeholder='Benutzername'/>
                <input id='password' type='password' placeholder='Passwort'/>
                <input type='submit' className={styles.submit} onClick={login} value='Login'/>
            </div>
        </div>
    )
}

import { useState } from 'react'
import sessions from '../backend/sessions'

export async function getServerSideProps(context) {
    const user = await new sessions.timedTask(() => {
        return sessions.login(context.req.connection.remoteAddress);
    }).start();
    if(user.authenticated) return {"props": {}, "redirect": {"destination": `/`, "permanent": false}}
    else return {"props": {}}
}