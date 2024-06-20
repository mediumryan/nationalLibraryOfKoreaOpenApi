'use server';

import { getBookInfo } from '@/service/api';

export async function bookSearchAction(
    previousState: any,
    formData: FormData
): Promise<any> {
    const bookName = formData.get('bookName');
    const writer = formData.get('writer');

    const data = {
        bookName: bookName,
        writer: writer,
    };

    const newBook = (await getBookInfo()).slice(0, 100);

    console.log(newBook);

    return {
        status: 'success',
        data: newBook,
    };
}
