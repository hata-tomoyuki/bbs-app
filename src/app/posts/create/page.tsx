'use client';

import { createPostAction } from '@/actions/post';
import { useActionState } from 'react';

export default function CreatePostPage() {
  const [state, formAction, isPending] = useActionState(createPostAction, {
    error: null,
  });

  return (
    <div className='container' style={{ maxWidth: '600px', marginTop: '30px' }}>
      <div className='card'>
        <h2 style={{ marginBottom: '20px' }}>新規投稿</h2>
        <form action={formAction}>
          <div className='form-group'>
            <label className='form-label' htmlFor='title'>
              タイトル
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className='form-input'
              placeholder='タイトルを入力'
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='content'>
              本文
            </label>
            <textarea
              id='content'
              name='content'
              className='form-textarea'
              placeholder='本文を入力'
            ></textarea>
          </div>
          {state.error && <p className='error-message'>{state.error}</p>}
          <button type='submit' className='btn' disabled={isPending}>
            投稿する
          </button>
        </form>
      </div>
    </div>
  );
}
