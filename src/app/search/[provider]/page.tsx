import React from 'react'
import { notFound } from 'next/navigation';
import { fetchResults } from '../../../lib/fetchResults';
import SearchResults from '@/components/SearchResults';
import { SearchResultProps } from '@/lib/searchResultsType'

interface SearchParams {
    location: string;
    adults: string;
    children: string;
    checkin: string;
    checkout: string;
    minBedrooms: string;
    keywords: string;
}

interface UrlProps {
    params: {
        provider: string;
    };
    searchParams: SearchParams;
}

const providers = ["airbnb"];

const searchResults = async ({ params, searchParams }: UrlProps) => {

    const isProvider = providers.includes(params.provider);

    if (!isProvider) {
        return notFound();
    }

    // console.log(searchParams);

    const data = {
        location: searchParams?.location,
        checkin: searchParams?.checkin,
        checkout: searchParams?.checkout,
        adults: searchParams?.adults,
        children: searchParams?.children,
        minBedrooms: searchParams?.minBedrooms,
        keywords: searchParams?.keywords
    }

    // console.log(data);

    // Use the results to render the search results
    const results = await fetchResults(data);
    return (
        <div className='container'>
            <SearchResults results={results} />
        </div>
    );

}

export default searchResults