// src/app/actions.ts
'use server';
import { signOut } from '@/auth';
export async function logoutAction() {
    await signOut();
}