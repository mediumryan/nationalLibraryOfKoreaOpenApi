'use client';

import { PageWrapper } from '@/styled/Common/Pages';

export default function Home() {
    return (
        <PageWrapper>
            <p>
                해당 앱은
                <span>문화 공공데이터광장</span>
                <span>국립중앙도서관_소장자료API</span>를 사용하였습니다.
            </p>
        </PageWrapper>
    );
}
