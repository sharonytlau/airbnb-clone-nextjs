import { AmenityCategoryEnum, CategoryEnum, Prisma } from '@prisma/client'

export const listings: (Omit<
  Prisma.ListingCreateInput,
  'startDate' | 'endDate' | 'category' | 'price' | 'rating'
> & {
  categories: CategoryEnum[]
  listingAmenities: String[]
})[] = [
  {
    title: 'Iseltwald, Switzerland',
    subtitle: '60 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/JT-RUtO2sfs' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Harder Kulm, Interlaken, Switzerland',
    subtitle: '65 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/1E-0mLMqAQ8' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Hovden, Norway',
    subtitle: '100 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/2cNh00feVzw' },
        { source: 'https://source.unsplash.com/1jE7eoaJaNk' },
        { source: 'https://source.unsplash.com/Oeatf3IQp7w' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Hovden, Norway',
    subtitle: '100 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/_W2M4Q100BQ' },
        { source: 'https://source.unsplash.com/iKQbaUgkEf0' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },

  {
    title: 'Carpathian Mountains',
    subtitle: '88 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/QPKyEU_oEFI' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Lauerz, Switzerland',
    subtitle: '57 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/thOIOTA6NHI' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Sugarloaf Provincial Park, Atholville, Canada',
    subtitle: '626 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/z9LPimZfyfo' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Forests'],
  },
  {
    title: 'Niederbauen-Chulm, Emmetten, Switzerland',
    subtitle: '56 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/pl1mhwMctJc' },
        { source: 'https://source.unsplash.com/qlHRuDvaxL8' },
        { source: 'https://source.unsplash.com/re2LZOB2XvY' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains'],
  },
  {
    title: 'Cucamonga Peak, United States',
    subtitle: '526 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/gvkdncTaZu8' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping'],
  },
  {
    title: 'Marzola, Trento, Italy',
    subtitle: '90 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/ebnlHkqfUHY' },
        { source: 'https://source.unsplash.com/YndHL7gQIJE' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains'],
  },
  {
    title: 'Flaming Gorge Reservoir, United States',
    subtitle: '512 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/eDgUyGu93Yw' },
        { source: 'https://source.unsplash.com/GZ1hc6Jvbrg' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains', 'Lakes'],
  },
  {
    title: 'Sandy Lake, BC, Canada',
    subtitle: '657 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/F4fH5dAfZnE' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains', 'Lakes'],
  },
  {
    title: 'Korlai Fort, Korlai, India',
    subtitle: '1033 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/yBgC-qVCxMg' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains', 'Lakes'],
  },
  {
    title: 'Los Angeles, United States',
    subtitle: '1058 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/CWMApX0wjPs' },
        { source: 'https://source.unsplash.com/dfOAVQvFWAA' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Apartments'],
  },
  {
    title: 'Spain',
    subtitle: '302 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/4ojhpgKpS68' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Apartments', 'Luxe', 'Minimal', 'Luxe'],
  },
  {
    title: 'Exuma, The Bahamas',
    subtitle: '1565 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/AhiUnolb7cg' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    title: 'Balboa Island, Newport Beach, United States',
    subtitle: '2932 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/nEvzSXBIhiU' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Islands', 'Beaches'],
  },
  {
    title: 'Louvain-la-Neuve, Ottignies-Louvain-la-Neuve, Belgium',
    subtitle: '142 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/KqOLr8OiQLU' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Wooden'],
  },
  {
    title: 'Gili Air, Indonesia',
    subtitle: '2930 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/TzwEcpB_2do' },
        { source: 'https://source.unsplash.com/t69fIZXxrwQ' },
        { source: 'https://source.unsplash.com/PibraWHb4h8' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Tropical'],
  },
  {
    title: 'Kauai, Hawaii, USA',
    subtitle: '1834 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/NdgNVPB0DT0' },
        { source: 'https://source.unsplash.com/5SLUtE1PMuM' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Beaches', 'Islands'],
  },
  {
    title: 'Tegallalang, Indonesia',
    subtitle: '2312 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/FOCO61JQ8EA' },
        { source: 'https://source.unsplash.com/gvephxIoMYg' },
        { source: 'https://source.unsplash.com/IgE49g4qbCk' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Tropical'],
  },
  {
    title: 'Indonesia',
    subtitle: '1278 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/9mPl0Zo7_gQ' },
        { source: 'https://source.unsplash.com/m7r1BVoWTAk' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    title: 'Encuentro Guadalupe, El Porvenir, Mexico',
    subtitle: '4256 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/DGa0LQ0yDPc' },
        { source: 'https://source.unsplash.com/m7r1BVoWTAk' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe', 'Mountains'],
  },
  {
    title: 'Oia, Greece',
    subtitle: '2135 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/JXsxH2shRgY' },
        { source: 'https://source.unsplash.com/aapSemzfsOk' },
        { source: 'https://source.unsplash.com/p-2CwpMtvN4' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe', 'Coasts'],
  },
  {
    title: 'Bocas del Toro, Panama',
    subtitle: '3127 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/lHlsrGJMH1A' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Coasts', 'Cabins'],
  },
  {
    title: 'Philippines',
    subtitle: '1634 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/688Nj6fVPXU' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Coasts', 'Countryside', 'Tropical'],
  },
  {
    title: 'Seabrook Island, United States',
    subtitle: '890 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/oSIuIEZZ6v0' },
        { source: 'https://source.unsplash.com/9mWADnnhpL8' },
        { source: 'https://source.unsplash.com/cGvRMx-p7u0' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Islands', 'Coasts', 'Countryside'],
  },
  {
    title: 'Quebec, Canada',
    subtitle: '729 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/XoM0eYSXWMs' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains', 'Forests'],
  },
  {
    title: 'Canggu, Indonesia',
    subtitle: '1292 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/iANAdaNu7mg' },
        { source: 'https://source.unsplash.com/HHWwqWV6d5k' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Tropical'],
  },
  {
    title: 'Oregon, United States',
    subtitle: '436 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/TcgASSD5G04' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains'],
  },
  {
    title: 'Arches National Park, Moab, United States',
    subtitle: '492 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/qelGaL2OLyE' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping'],
  },
  {
    title: 'Hovden, Norway',
    subtitle: '138 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/FzthdgL6vBI' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Schwende District, Switzerland',
    subtitle: '63 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/DOmnnuarfRI' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Ninh Bình, Vietnam',
    subtitle: '210 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/8MhejqEghLk' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Madonna di Campiglio, Italy',
    subtitle: '162 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/7MH4ped6_Mo' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Victoria, Port Glaud, Seychelles',
    subtitle: '4262 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/Mu1Sn6AJZ9c' },
        { source: 'https://source.unsplash.com/Z6r_SkZq_fw' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Rainforests', 'Tropical'],
  },
  {
    title: 'Emerald Lake, Canada',
    subtitle: '118 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/OgcJIKRnRC8' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Montenegro, Zabljak',
    subtitle: '40 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/Yd59eQJVYAo' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains', 'Camping'],
  },
  {
    title: 'Sedona, AZ, USA',
    subtitle: '130 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/tNaDwQ698tM' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Leysin, Switzerland',
    subtitle: '58 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/8EkdijWGHTI' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains', 'Desert'],
  },
  {
    title: 'Zakopane, Tatry, Poland',
    subtitle: '70 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/xin4oHO4FFQ' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Harbor Springs, MI, USA',
    subtitle: '320 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/0_N6VO_DAN4' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Zakopane, Tatry, Poland',
    subtitle: '70 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/xin4oHO4FFQ' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Tropical'],
  },
  {
    title: 'Schronisko PTTK na Przegibku, Polska',
    subtitle: '72 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/inns24xeXXM' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Reine, Norwegen',
    subtitle: '122 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/TkkYD1hyVRo' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Krøttøya, Norway',
    subtitle: '130 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/WNntEI6JT6Y' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains', 'Countryside'],
  },
  {
    title: 'Rüte, Switzerland',
    subtitle: '60 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/1opHGv8iXvg' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Tkvarcheli',
    subtitle: '80 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/cf6UhTW9tSs' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'San Francisco, United States',
    subtitle: '220 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/6eP8EMpTbA4' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    title: 'Lisbon, Portugal',
    subtitle: '40 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/8saVYOMHFzU' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    title: 'Paris, France',
    subtitle: '46 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/PRFiPHhFwQA' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    title: 'Paris, France',
    subtitle: '45 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/xUZye7XNxuM' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Countryside'],
  },
  {
    title: 'Paris, France',
    subtitle: '45 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/C9bO_qXxofc' },
        { source: 'https://source.unsplash.com/junWGhkueds' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Apartments'],
  },
  {
    title: 'Montmartre, Paris, France',
    subtitle: '44 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/fbcG6KCfaM4' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Downtown'],
  },
  {
    title: 'Montmartre, Paris, France',
    subtitle: '44 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/dTDLVlVDic4' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Landmarks'],
  },
  {
    title: 'Paris, France',
    subtitle: '44 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/uLOJAXgjWYI' },
        { source: 'https://source.unsplash.com/zgGShCZeBT4' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Apartments'],
  },
  {
    title: 'Paris, France',
    subtitle: '44 km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/R5scocnOOdM' },
        { source: 'https://source.unsplash.com/888-NfA8Tfo' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Landmarks'],
  },
  {
    title: 'Paris, France',
    subtitle: '44 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/DXuxHw3S5ak' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Downtown', 'Landmarks'],
  },
  {
    title: 'Quai de la Tournelle, Paris, France',
    subtitle: '42 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/olpYWcO2kHw' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Downtown'],
  },
  {
    title: 'Chelyabinsk, Russia',
    subtitle: '280 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/nBuiLbz_j4A' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Ylläsjärvi, Finlandia',
    subtitle: '164km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/GnIGPt3sCR0' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Countryside'],
  },
  {
    title: 'Clackamas County, OR, USA',
    subtitle: '562km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/rhOGNUTLAeI' },
        { source: 'https://source.unsplash.com/cUCtOX-CP9k' },
        { source: 'https://source.unsplash.com/B4qBdlNIuS0' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    title: 'Berlin',
    subtitle: '82km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/BSQq5dRT_KU' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Countryside'],
  },
  {
    title: 'Byxelkrok, Sweden',
    subtitle: '106km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/teX7sZeTQd8' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins', 'Countryside'],
  },
  {
    title: 'Norge',
    subtitle: '76km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/mu2qJIIMvFg' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins'],
  },
  {
    title: 'Lapland, Finland',
    subtitle: '106km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/-b19XY-T6GU' },
        { source: 'https://source.unsplash.com/gThfDnqgfMw' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Forests'],
  },
  {
    title: 'Lapland, Finland',
    subtitle: '164km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/MRX-unYU1dc' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Skiing', 'Arctic'],
  },
  {
    title: 'Val Gardena, Italy',
    subtitle: '63km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/6UnSrZnHe0M' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Forests', 'Mountains'],
  },
  {
    title: 'Norway',
    subtitle: '420km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/vgrv9z8yLtY' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins', 'Coasts'],
  },
  {
    title: 'Jomsom, Nepal',
    subtitle: '420km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/bBKmwEtc1nk' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Desert', 'Mountains', 'Countryside'],
  },

  {
    title: 'Norway',
    subtitle: '388km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/bCTMjQTpDNg' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Mountains'],
  },
  {
    title: 'Solitude Nordic Center, United States',
    subtitle: '164km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/nWC3rwlX1CU' },
        { source: 'https://source.unsplash.com/dqE4raxMqlo' },
        { source: 'https://source.unsplash.com/j1F-WyKgr28' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins'],
  },
  {
    title: 'Lofoten, Norway',
    subtitle: '149km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/VKPcxvSdvVs' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Countryside', 'Cabins', 'Mountains'],
  },
  {
    title: 'Tranøy, Norway',
    subtitle: '249km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/jGP-HVay63M' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Countryside'],
  },
  {
    title: 'Framnes, Dalvik, Iceland',
    subtitle: '249km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/-90kxRqKSmc' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Lakes', 'Arctic', 'Minimal'],
  },
  {
    title: 'Norway',
    subtitle: '235km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/yQoAlbuxb48' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins', 'Lakes', 'Countryside'],
  },
  {
    title: 'Iceland',
    subtitle: '435km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/PoOXSW9eYgc' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins', 'Mountains', 'Countryside'],
  },
  {
    title: 'Aasiaat, Greenland',
    subtitle: '435km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/KdbzxiFT7VI' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Countryside'],
  },
  {
    title: 'Greenland',
    subtitle: '249km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/gPuujrp4PZ0' }],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Countryside', 'Cabins'],
  },
  {
    title: 'Drøbak, Norway',
    subtitle: '164km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/kyTHeGwSK78' },
        { source: 'https://source.unsplash.com/vWYbHqzayhA' },
      ],
    },
    listingAmenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Coasts', 'Countryside'],
  },
]
