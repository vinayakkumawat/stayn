import React from 'react'
import { notFound } from 'next/navigation';
import { fetchResults } from '../../../lib/fetchResults';

interface SearchParams {
    url: URL;
    group_adults: string;
    group_children: string;
    no_rooms: string;
    checkin: string;
    checkout: string;
    keywords: string;
}

interface Props {
    searchParams: SearchParams
}

const searchResults = async ({ searchParams }: Props) => {

    if(!searchParams.url) return notFound()

    const results = await fetchResults(searchParams)

    if (!results) return <div>No results...</div>;

    return (
        <div>searchResults</div>


    )
}

export default searchResults