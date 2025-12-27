'use client';

import { signupAction } from '@/actions/auth';
import Link from 'next/link';
import { useActionState } from 'react';

export default function SignupPage() {
  const [state, formAction, isPending] = useActionState(signupAction, {
    error: null,
  });

  return (
    <div className='container' style={{ maxWidth: '400px', marginTop: '50px' }}>
      <div className='card'>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
          アカウント登録
        </h2>
        <form action={formAction}>
          <div className='form-group'>
            <label className='form-label' htmlFor='username'>
              ユーザー名
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='form-input'
              placeholder='ユーザー名'
              required
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='email'>
              メールアドレス
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='form-input'
              placeholder='example@email.com'
              required
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='password'>
              パスワード
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='form-input'
              placeholder='********'
              required
            />
          </div>
          {state.error && <p className='error-message'>{state.error}</p>}
          <button
            type='submit'
            className='btn'
            style={{ width: '100%', marginBottom: '15px' }}
            disabled={isPending}
          >
            登録する
          </button>
        </form>
        <p style={{ textAlign: 'center', fontSize: '14px' }}>
          すでにアカウントをお持ちですか？ <br />
          <Link href='/login' style={{ color: '#0070f3' }}>
            ログインはこちら
          </Link>
        </p>
      </div>
    </div>
  );
}
