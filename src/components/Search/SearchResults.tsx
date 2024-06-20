import { bookAtom } from '@/data/bookAtom';
import {
    SearchResultsCard,
    SearchResultsWrapper,
} from '@/styled/Search/Search';
import { useAtomValue } from 'jotai';
import React from 'react';

export default function SearchResults() {
    const bookData = useAtomValue(bookAtom);

    return (
        <SearchResultsWrapper>
            {bookData
                ? bookData.map((b, index) => {
                      return (
                          <SearchResultsCard key={`book${index}`}>
                              <div id="card-item-wrapper">
                                  <p id="card-item-title">제목</p>
                                  <p id="card-item-colon">:</p>
                                  <p id="card-item-value">{b.title}</p>
                              </div>
                              <div id="card-item-wrapper">
                                  <p id="card-item-title">저자</p>
                                  <p id="card-item-colon">:</p>
                                  <p id="card-item-value">{b.person}</p>
                              </div>
                              <div id="card-item-wrapper">
                                  <p id="card-item-title">출판사</p>
                                  <p id="card-item-colon">:</p>
                                  <p id="card-item-value">{b.creator}</p>
                              </div>
                              <div id="card-item-wrapper">
                                  <p id="card-item-title">저장소</p>
                                  <p id="card-item-colon">:</p>
                                  <p id="card-item-value">{b.collectionDb}</p>
                              </div>
                              <div id="card-item-wrapper">
                                  <p id="card-item-title">url</p>
                                  <p id="card-item-colon">:</p>
                                  <a
                                      id="card-item-value"
                                      className="url"
                                      href={b.url}
                                      target="blank"
                                  >
                                      {b.url}
                                  </a>
                              </div>
                          </SearchResultsCard>
                      );
                  })
                : 'No Results'}
        </SearchResultsWrapper>
    );
}
