'use client'
import { catchError } from '@/utils/helper';
import styles from './login.module.scss';
import { useState } from 'react';
import { useUserStore } from '@/store/user';
import { message } from 'antd';
import { login } from '@/api/login';

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

  async function loginFn(data: any) {
    const [err, res] = await catchError(login(data));
    if(err) {
      message.error(err.statusText)
      return Promise.reject(err);
    }
    onSuccess && onSuccess();
    return updateUser({
      access_token: res.access_token,
    });
  }
  
  return <div className={styles.login}>
    <h2>Login</h2>
    <div className={styles.login_box}>
      <input type="text" name='name' id='name' required onChange={(e) => setForm({...form, username: e.target.value})} />
      <label htmlFor="name">Username</label>
    </div>
    <div className={styles.login_box}>
      <input type="password" name='pwd' id='pwd' required onChange={(e) => setForm({...form, password: e.target.value})} />
      <label htmlFor="pwd">Password</label>
    </div>
    <a href="#" onClick={() => loginFn(form)}>
      login in
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
}

