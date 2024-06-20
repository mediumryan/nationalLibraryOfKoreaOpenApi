import { BookType } from '@/service/api';
import { atom } from 'jotai';

export const bookAtom = atom<BookType[] | null>(null);
