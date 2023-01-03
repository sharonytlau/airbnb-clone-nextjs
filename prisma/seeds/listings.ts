import { AmenityCategoryEnum, CategoryEnum, Prisma } from '@prisma/client'

export const listings: (Omit<
  Prisma.ListingCreateInput,
  | 'startDate'
  | 'endDate'
  | 'category'
  | 'price'
  | 'homeDetails'
  | 'name'
  | 'placeType'
  | 'host'
> & {
  categories: CategoryEnum[]
  amenities: String[]
})[] = [
  {
    location: 'Iseltwald, Switzerland',
    subtitle: '60 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/JT-RUtO2sfs' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Harder Kulm, Interlaken, Switzerland',
    subtitle: '65 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/1E-0mLMqAQ8' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Hovden, Norway',
    subtitle: '100 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/2cNh00feVzw' },
        { source: 'https://source.unsplash.com/1jE7eoaJaNk' },
        { source: 'https://source.unsplash.com/Oeatf3IQp7w' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Hovden, Norway',
    subtitle: '100 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/_W2M4Q100BQ' },
        { source: 'https://source.unsplash.com/iKQbaUgkEf0' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },

  {
    location: 'Carpathian Mountains',
    subtitle: '88 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/QPKyEU_oEFI' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Lauerz, Switzerland',
    subtitle: '57 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/thOIOTA6NHI' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Sugarloaf Provincial Park, Atholville, Canada',
    subtitle: '626 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/z9LPimZfyfo' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Forests'],
  },
  {
    location: 'Niederbauen-Chulm, Emmetten, Switzerland',
    subtitle: '56 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/pl1mhwMctJc' },
        { source: 'https://source.unsplash.com/qlHRuDvaxL8' },
        { source: 'https://source.unsplash.com/re2LZOB2XvY' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains'],
  },
  {
    location: 'Cucamonga Peak, United States',
    subtitle: '526 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/gvkdncTaZu8' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping'],
  },
  {
    location: 'Marzola, Trento, Italy',
    subtitle: '90 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/ebnlHkqfUHY' },
        { source: 'https://source.unsplash.com/YndHL7gQIJE' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains'],
  },
  {
    location: 'Flaming Gorge Reservoir, United States',
    subtitle: '512 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/eDgUyGu93Yw' },
        { source: 'https://source.unsplash.com/GZ1hc6Jvbrg' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains', 'Lakes'],
  },
  {
    location: 'Sandy Lake, BC, Canada',
    subtitle: '657 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/F4fH5dAfZnE' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains', 'Lakes'],
  },
  {
    location: 'Korlai Fort, Korlai, India',
    subtitle: '1033 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/yBgC-qVCxMg' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains', 'Lakes'],
  },
  {
    location: 'Los Angeles, United States',
    subtitle: '1058 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/CWMApX0wjPs' },
        { source: 'https://source.unsplash.com/dfOAVQvFWAA' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Apartments'],
  },
  {
    location: 'Spain',
    subtitle: '302 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/4ojhpgKpS68' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Apartments', 'Luxe', 'Minimal', 'Luxe'],
  },
  {
    location: 'Exuma, The Bahamas',
    subtitle: '1565 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/AhiUnolb7cg' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    location: 'Balboa Island, Newport Beach, United States',
    subtitle: '2932 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/nEvzSXBIhiU' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Islands', 'Beaches'],
  },
  {
    location: 'Louvain-la-Neuve, Ottignies-Louvain-la-Neuve, Belgium',
    subtitle: '142 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/KqOLr8OiQLU' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Wooden'],
  },
  {
    location: 'Gili Air, Indonesia',
    subtitle: '2930 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/TzwEcpB_2do' },
        { source: 'https://source.unsplash.com/t69fIZXxrwQ' },
        { source: 'https://source.unsplash.com/PibraWHb4h8' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Tropical'],
  },
  {
    location: 'Kauai, Hawaii, USA',
    subtitle: '1834 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/NdgNVPB0DT0' },
        { source: 'https://source.unsplash.com/5SLUtE1PMuM' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Beaches', 'Islands'],
  },
  {
    location: 'Tegallalang, Indonesia',
    subtitle: '2312 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/FOCO61JQ8EA' },
        { source: 'https://source.unsplash.com/gvephxIoMYg' },
        { source: 'https://source.unsplash.com/IgE49g4qbCk' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Tropical'],
  },
  {
    location: 'Indonesia',
    subtitle: '1278 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/9mPl0Zo7_gQ' },
        { source: 'https://source.unsplash.com/m7r1BVoWTAk' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    location: 'Encuentro Guadalupe, El Porvenir, Mexico',
    subtitle: '4256 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/DGa0LQ0yDPc' },
        { source: 'https://source.unsplash.com/m7r1BVoWTAk' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe', 'Mountains'],
  },
  {
    location: 'Oia, Greece',
    subtitle: '2135 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/JXsxH2shRgY' },
        { source: 'https://source.unsplash.com/aapSemzfsOk' },
        { source: 'https://source.unsplash.com/p-2CwpMtvN4' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe', 'Coasts'],
  },
  {
    location: 'Bocas del Toro, Panama',
    subtitle: '3127 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/lHlsrGJMH1A' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Coasts', 'Cabins'],
  },
  {
    location: 'Philippines',
    subtitle: '1634 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/688Nj6fVPXU' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Coasts', 'Countryside', 'Tropical'],
  },
  {
    location: 'Seabrook Island, United States',
    subtitle: '890 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/oSIuIEZZ6v0' },
        { source: 'https://source.unsplash.com/9mWADnnhpL8' },
        { source: 'https://source.unsplash.com/cGvRMx-p7u0' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Islands', 'Coasts', 'Countryside'],
  },
  {
    location: 'Quebec, Canada',
    subtitle: '729 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/XoM0eYSXWMs' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains', 'Forests'],
  },
  {
    location: 'Canggu, Indonesia',
    subtitle: '1292 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/iANAdaNu7mg' },
        { source: 'https://source.unsplash.com/HHWwqWV6d5k' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Tropical'],
  },
  {
    location: 'Oregon, United States',
    subtitle: '436 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/TcgASSD5G04' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping', 'Mountains'],
  },
  {
    location: 'Arches National Park, Moab, United States',
    subtitle: '492 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/qelGaL2OLyE' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Camping'],
  },
  {
    location: 'Hovden, Norway',
    subtitle: '138 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/FzthdgL6vBI' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Schwende District, Switzerland',
    subtitle: '63 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/DOmnnuarfRI' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Ninh Bình, Vietnam',
    subtitle: '210 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/8MhejqEghLk' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Madonna di Campiglio, Italy',
    subtitle: '162 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/7MH4ped6_Mo' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Victoria, Port Glaud, Seychelles',
    subtitle: '4262 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/Mu1Sn6AJZ9c' },
        { source: 'https://source.unsplash.com/Z6r_SkZq_fw' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Rainforests', 'Tropical'],
  },
  {
    location: 'Emerald Lake, Canada',
    subtitle: '118 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/OgcJIKRnRC8' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Montenegro, Zabljak',
    subtitle: '40 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/Yd59eQJVYAo' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains', 'Camping'],
  },
  {
    location: 'Sedona, AZ, USA',
    subtitle: '130 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/tNaDwQ698tM' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Leysin, Switzerland',
    subtitle: '58 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/8EkdijWGHTI' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains', 'Desert'],
  },
  {
    location: 'Zakopane, Tatry, Poland',
    subtitle: '70 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/xin4oHO4FFQ' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Harbor Springs, MI, USA',
    subtitle: '320 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/0_N6VO_DAN4' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Zakopane, Tatry, Poland',
    subtitle: '70 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/xin4oHO4FFQ' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Tropical'],
  },
  {
    location: 'Schronisko PTTK na Przegibku, Polska',
    subtitle: '72 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/inns24xeXXM' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Reine, Norwegen',
    subtitle: '122 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/TkkYD1hyVRo' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Krøttøya, Norway',
    subtitle: '130 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/WNntEI6JT6Y' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains', 'Countryside'],
  },
  {
    location: 'Rüte, Switzerland',
    subtitle: '60 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/1opHGv8iXvg' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Tkvarcheli',
    subtitle: '80 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/cf6UhTW9tSs' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'San Francisco, United States',
    subtitle: '220 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/6eP8EMpTbA4' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    location: 'Lisbon, Portugal',
    subtitle: '40 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/8saVYOMHFzU' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    location: 'Paris, France',
    subtitle: '46 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/PRFiPHhFwQA' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Luxe'],
  },
  {
    location: 'Paris, France',
    subtitle: '45 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/xUZye7XNxuM' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Countryside'],
  },
  {
    location: 'Paris, France',
    subtitle: '45 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/C9bO_qXxofc' },
        { source: 'https://source.unsplash.com/junWGhkueds' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Apartments'],
  },
  {
    location: 'Montmartre, Paris, France',
    subtitle: '44 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/fbcG6KCfaM4' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Downtown'],
  },
  {
    location: 'Montmartre, Paris, France',
    subtitle: '44 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/dTDLVlVDic4' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Landmarks'],
  },
  {
    location: 'Paris, France',
    subtitle: '44 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/uLOJAXgjWYI' },
        { source: 'https://source.unsplash.com/zgGShCZeBT4' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Apartments'],
  },
  {
    location: 'Paris, France',
    subtitle: '44 km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/R5scocnOOdM' },
        { source: 'https://source.unsplash.com/888-NfA8Tfo' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Landmarks'],
  },
  {
    location: 'Paris, France',
    subtitle: '44 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/DXuxHw3S5ak' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Downtown', 'Landmarks'],
  },
  {
    location: 'Quai de la Tournelle, Paris, France',
    subtitle: '42 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/olpYWcO2kHw' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Downtown'],
  },
  {
    location: 'Chelyabinsk, Russia',
    subtitle: '280 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/nBuiLbz_j4A' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Ylläsjärvi, Finlandia',
    subtitle: '164km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/GnIGPt3sCR0' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Countryside'],
  },
  {
    location: 'Clackamas County, OR, USA',
    subtitle: '562km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/rhOGNUTLAeI' },
        { source: 'https://source.unsplash.com/cUCtOX-CP9k' },
        { source: 'https://source.unsplash.com/B4qBdlNIuS0' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Mountains'],
  },
  {
    location: 'Berlin',
    subtitle: '82km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/BSQq5dRT_KU' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Countryside'],
  },
  {
    location: 'Byxelkrok, Sweden',
    subtitle: '106km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/teX7sZeTQd8' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins', 'Countryside'],
  },
  {
    location: 'Norge',
    subtitle: '76km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/mu2qJIIMvFg' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins'],
  },
  {
    location: 'Lapland, Finland',
    subtitle: '106km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/-b19XY-T6GU' },
        { source: 'https://source.unsplash.com/gThfDnqgfMw' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Forests'],
  },
  {
    location: 'Lapland, Finland',
    subtitle: '164km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/MRX-unYU1dc' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Skiing', 'Arctic'],
  },
  {
    location: 'Val Gardena, Italy',
    subtitle: '63km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/6UnSrZnHe0M' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Forests', 'Mountains'],
  },
  {
    location: 'Norway',
    subtitle: '420km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/vgrv9z8yLtY' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins', 'Coasts'],
  },
  {
    location: 'Jomsom, Nepal',
    subtitle: '420km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/bBKmwEtc1nk' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Desert', 'Mountains', 'Countryside'],
  },

  {
    location: 'Norway',
    subtitle: '388km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/bCTMjQTpDNg' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Mountains'],
  },
  {
    location: 'Solitude Nordic Center, United States',
    subtitle: '164km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/nWC3rwlX1CU' },
        { source: 'https://source.unsplash.com/dqE4raxMqlo' },
        { source: 'https://source.unsplash.com/j1F-WyKgr28' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins'],
  },
  {
    location: 'Lofoten, Norway',
    subtitle: '149km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/VKPcxvSdvVs' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Countryside', 'Cabins', 'Mountains'],
  },
  {
    location: 'Tranøy, Norway',
    subtitle: '249km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/jGP-HVay63M' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Countryside'],
  },
  {
    location: 'Framnes, Dalvik, Iceland',
    subtitle: '249km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/-90kxRqKSmc' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Lakes', 'Arctic', 'Minimal'],
  },
  {
    location: 'Norway',
    subtitle: '235km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/yQoAlbuxb48' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins', 'Lakes', 'Countryside'],
  },
  {
    location: 'Iceland',
    subtitle: '435km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/PoOXSW9eYgc' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Cabins', 'Mountains', 'Countryside'],
  },
  {
    location: 'Aasiaat, Greenland',
    subtitle: '435km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/KdbzxiFT7VI' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Countryside'],
  },
  {
    location: 'Greenland',
    subtitle: '249km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/gPuujrp4PZ0' }],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Countryside', 'Cabins'],
  },
  {
    location: 'Drøbak, Norway',
    subtitle: '164km away',
    images: {
      create: [
        { source: 'https://source.unsplash.com/kyTHeGwSK78' },
        { source: 'https://source.unsplash.com/vWYbHqzayhA' },
      ],
    },
    amenities: ['Cleaning products', 'Hot water'],
    categories: ['Arctic', 'Coasts', 'Countryside'],
  },
]
