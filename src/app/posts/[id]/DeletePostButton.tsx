'use client';

import { deletePostAction } from '@/actions/post';
import { startTransition, useActionState } from 'react';

export default function DeletePostButton({ postId }: { postId: number }) {
  const [, formAction, isPending] = useActionState(deletePostAction, {
    error: null,
  });

  const handleDelete = () => {
    if (confirm('本当に削除しますか？')) {
      startTransition(() => {
        formAction(postId);
      });
    }
  }

  return (
    <button className='btn-danger' onClick={handleDelete} disabled={isPending}>
      削除
    </button>
  );
}
