'use client'
import { catchError } from '@/utils/helper';
import styles from './login.module.scss';
import http from '@/utils/http';
import { useState } from 'react';
import { useUserStore } from '@/store/user';

export default function Login({
  onSuccess
}: {
  onSuccess: () => void
}) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const updateUser = useUserStore.getState().updateUser;

  async function login(data: any) {
    const [err, res] = await catchError(http.post<{access_token: string}>(`/auth/login`, { data, ignore: true }));
    if(err) return Promise.reject(err);
    onSuccess && onSuccess();
    return updateUser({
      access_token: res.access_token,
    });
  }
  
  return <div className={styles.login}>
    <h2>Login</h2>
    <div className={styles.login_box}>
      <input type="text" name='name' id='name' required onChange={(e) => setForm({...form, username: e.target.value})} />
      <label>Username</label>
    </div>
    <div className={styles.login_box}>
      <input type="password" name='pwd' id='pwd' required onChange={(e) => setForm({...form, password: e.target.value})} />
      <label>Password</label>
    </div>
    <a href="#" onClick={() => login(form)}>
      login in
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
}

