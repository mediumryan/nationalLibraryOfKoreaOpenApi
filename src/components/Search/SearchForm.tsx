import { bookSearchAction } from '@/app/search/action';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { PageTitle } from '@/styled/Common/Pages';
import { SearchItemWrapper, SubmitButton } from '@/styled/Search/Search';
import { useAtom } from 'jotai';
import { bookAtom } from '@/data/bookAtom';

const initialState = {
    message: null,
};

export default function SearchForm() {
    const [state, formAction] = useFormState(bookSearchAction, initialState);
    const [bookData, setBookData] = useAtom(bookAtom);

    useEffect(() => {
        if (state?.status === 'success' && state?.data) {
            setBookData(state.data);
        } else {
            return;
        }
    }, [state]);

    return (
        <form action={formAction}>
            <PageTitle>도서검색</PageTitle>
            <SearchItemWrapper>
                <h2>도서명</h2>
                <input type="text" name="bookName" />
            </SearchItemWrapper>
            <SearchItemWrapper>
                <h2>저자</h2>
                <input type="text" name="writer" />
            </SearchItemWrapper>
            <SubmitButton type="submit">검색</SubmitButton>
        </form>
    );
}
