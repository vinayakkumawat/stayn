import React from 'react'
import { SearchResultProps } from '@/lib/searchResultsType'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import Link from 'next/link'

const SearchResults = ({ results }: { results: SearchResultProps }) => {
    return (
        <div className='my-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {results.data.list.map((item, index) => (
                    <Link key={index} href={`https://airbnb.com/rooms/${item.listing.id}`} target="_blank">
                        <DirectionAwareHover className='h-60' key={index} imageUrl={item.listing.contextualPictures[0].picture} imageClassName='w-full h-full image-cover'>
                            <h2 className="font-bold text-base">{item.listing.name}</h2>
                            <p className='text-xs'>{item.listing.city}</p>
                            <p className='text-sm'>{item.listing.avgRatingA11yLabel}</p>
                            <p className="font-bold text-base">{item.pricingQuote.structuredStayDisplayPrice.primaryLine.price}</p>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchResults