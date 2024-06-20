'use client';

import SearchForm from '@/components/Search/SearchForm';
import SearchResults from '@/components/Search/SearchResults';
import { PageWrapper } from '@/styled/Common/Pages';

export default function page() {
    return (
        <PageWrapper>
            <SearchForm />
            <SearchResults />
        </PageWrapper>
    );
}
