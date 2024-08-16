import { SearchResultProps } from "./searchResultsType";

interface SearchParams {
    location: string;
    checkin: string;
    checkout: string;
    adults: string;
    children: string;
    minBedrooms: string;
    keywords: string;
}

export async function fetchResults(searchParams: SearchParams) {

    const url = new URL(`${process.env.NEXT_PUBLIC_AIRBNB_RAPID_API}`);
    const key = `${process.env.NEXT_PUBLIC_AIRBNB_RAPID_API_KEY}`;
    const host = `${process.env.NEXT_PUBLIC_AIRBNB_RAPID_API_HOST}`;

    url.searchParams.set("location", searchParams.location);
    url.searchParams.set("totalRecords", "20");
    url.searchParams.set("currency", "GBP");
    url.searchParams.set("adults", searchParams.adults);
    url.searchParams.set("children", searchParams.children);
    url.searchParams.set("checkin", searchParams.checkin);
    url.searchParams.set("checkout", searchParams.checkout);
    url.searchParams.set("minBedrooms", searchParams.minBedrooms);

    const options: RequestInit = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': key!,
            'x-rapidapi-host': host!
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        // console.log(result);

        // Transform the raw data into the required schema
        const transformedData: SearchResultProps = {
            status: true,
            message: 'Data fetched successfully',
            timestamp: Date.now(),
            data: {
                list: Array.isArray(result.data.list) ? result.data.list.map((item: any) => ({
                    listing: {
                        id: item.listing.id,
                        name: item.listing.name,
                        avgRatingA11yLabel: item.listing.avgRatingA11yLabel,
                        city: item.listing.city,
                        contextualPictures: item.listing.contextualPictures.map((pic: any) => ({
                            id: pic.id,
                            picture: pic.picture,
                            caption: pic.caption
                        })),
                        coordinate: {
                            longitude: item.listing.coordinate.longitude,
                            latitude: item.listing.coordinate.latitude
                        },
                        pdpType: item.listing.pdpType,
                        roomTypeCategory: item.listing.roomTypeCategory
                    },
                    pricingQuote: {
                        structuredStayDisplayPrice: {
                            primaryLine: {
                                price: item.pricingQuote.structuredStayDisplayPrice.primaryLine.price
                            }
                        }
                    }
                })) : []
            }
        };

        // console.log(transformedData);

        return transformedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            status: false,
            message: 'Error fetching data',
            timestamp: Date.now(),
            data: {
                list: []
            }
        };;
    }
}