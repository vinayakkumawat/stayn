export interface SearchResultProps {
    status: boolean;
    message: string;
    timestamp: number;
    data: Data;
}

export interface Data {
    list: List[];
}

export interface List {
    listing: Listing;
    pricingQuote: PricingQuote;
}

export interface Listing {
    id: string;
    name: string;
    avgRatingA11yLabel: string;
    city: string;
    contextualPictures: ContextualPicture[];
    coordinate: Coordinate;
    pdpType: string;
    roomTypeCategory: string;
}

export interface ContextualPicture {
    id: string;
    picture: string;
    caption: string;
}

export interface Coordinate {
    longitude: number;
    latitude: number;
}

export interface PricingQuote {
    structuredStayDisplayPrice: {
        primaryLine: {
            price: string;
        }
    }
}