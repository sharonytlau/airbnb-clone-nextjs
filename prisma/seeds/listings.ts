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
})[] = [
  {
    location: 'Iseltwald, Switzerland',
    subtitle: '60 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/JT-RUtO2sfs' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Harder Kulm, Interlaken, Switzerland',
    subtitle: '65 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/1E-0mLMqAQ8' }],
    },
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
    categories: ['Mountains'],
  },

  {
    location: 'Carpathian Mountains',
    subtitle: '88 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/QPKyEU_oEFI' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Lauerz, Switzerland',
    subtitle: '57 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/thOIOTA6NHI' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Sugarloaf Provincial Park, Atholville, Canada',
    subtitle: '626 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/z9LPimZfyfo' }],
    },
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
    categories: ['Camping', 'Mountains'],
  },
  {
    location: 'Cucamonga Peak, United States',
    subtitle: '526 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/gvkdncTaZu8' }],
    },
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
    categories: ['Camping', 'Mountains', 'Lakes'],
  },
  {
    location: 'Sandy Lake, BC, Canada',
    subtitle: '657 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/F4fH5dAfZnE' }],
    },
    categories: ['Camping', 'Mountains', 'Lakes'],
  },
  {
    location: 'Korlai Fort, Korlai, India',
    subtitle: '1033 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/yBgC-qVCxMg' }],
    },
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
    categories: ['Apartments'],
  },
  {
    location: 'Spain',
    subtitle: '302 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/4ojhpgKpS68' }],
    },
    categories: ['Apartments', 'Luxe', 'Minimal', 'Luxe'],
  },
  {
    location: 'Exuma, The Bahamas',
    subtitle: '1565 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/AhiUnolb7cg' }],
    },
    categories: ['Luxe'],
  },
  {
    location: 'Balboa Island, Newport Beach, United States',
    subtitle: '2932 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/nEvzSXBIhiU' }],
    },
    categories: ['Islands', 'Beaches'],
  },
  {
    location: 'Louvain-la-Neuve, Ottignies-Louvain-la-Neuve, Belgium',
    subtitle: '142 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/KqOLr8OiQLU' }],
    },
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
    categories: ['Luxe', 'Coasts'],
  },
  {
    location: 'Bocas del Toro, Panama',
    subtitle: '3127 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/lHlsrGJMH1A' }],
    },
    categories: ['Coasts', 'Cabins'],
  },
  {
    location: 'Philippines',
    subtitle: '1634 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/688Nj6fVPXU' }],
    },
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
    categories: ['Islands', 'Coasts', 'Countryside'],
  },
  {
    location: 'Quebec, Canada',
    subtitle: '729 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/XoM0eYSXWMs' }],
    },
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
    categories: ['Tropical'],
  },
  {
    location: 'Oregon, United States',
    subtitle: '436 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/TcgASSD5G04' }],
    },
    categories: ['Camping', 'Mountains'],
  },
  {
    location: 'Arches National Park, Moab, United States',
    subtitle: '492 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/qelGaL2OLyE' }],
    },
    categories: ['Camping'],
  },
  {
    location: 'Hovden, Norway',
    subtitle: '138 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/FzthdgL6vBI' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Schwende District, Switzerland',
    subtitle: '63 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/DOmnnuarfRI' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Ninh Bình, Vietnam',
    subtitle: '210 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/8MhejqEghLk' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Madonna di Campiglio, Italy',
    subtitle: '162 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/7MH4ped6_Mo' }],
    },
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
    categories: ['Rainforests', 'Tropical'],
  },
  {
    location: 'Emerald Lake, Canada',
    subtitle: '118 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/OgcJIKRnRC8' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Montenegro, Zabljak',
    subtitle: '40 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/Yd59eQJVYAo' }],
    },
    categories: ['Mountains', 'Camping'],
  },
  {
    location: 'Sedona, AZ, USA',
    subtitle: '130 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/tNaDwQ698tM' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Leysin, Switzerland',
    subtitle: '58 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/8EkdijWGHTI' }],
    },
    categories: ['Mountains', 'Desert'],
  },
  {
    location: 'Zakopane, Tatry, Poland',
    subtitle: '70 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/xin4oHO4FFQ' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Harbor Springs, MI, USA',
    subtitle: '320 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/0_N6VO_DAN4' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Zakopane, Tatry, Poland',
    subtitle: '70 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/xin4oHO4FFQ' }],
    },
    categories: ['Tropical'],
  },
  {
    location: 'Schronisko PTTK na Przegibku, Polska',
    subtitle: '72 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/inns24xeXXM' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Reine, Norwegen',
    subtitle: '122 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/TkkYD1hyVRo' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Krøttøya, Norway',
    subtitle: '130 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/WNntEI6JT6Y' }],
    },
    categories: ['Mountains', 'Countryside'],
  },
  {
    location: 'Rüte, Switzerland',
    subtitle: '60 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/1opHGv8iXvg' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Tkvarcheli',
    subtitle: '80 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/cf6UhTW9tSs' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'San Francisco, United States',
    subtitle: '220 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/6eP8EMpTbA4' }],
    },
    categories: ['Luxe'],
  },
  {
    location: 'Lisbon, Portugal',
    subtitle: '40 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/8saVYOMHFzU' }],
    },
    categories: ['Luxe'],
  },
  {
    location: 'Paris, France',
    subtitle: '46 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/PRFiPHhFwQA' }],
    },
    categories: ['Luxe'],
  },
  {
    location: 'Paris, France',
    subtitle: '45 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/xUZye7XNxuM' }],
    },
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
    categories: ['Apartments'],
  },
  {
    location: 'Montmartre, Paris, France',
    subtitle: '44 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/fbcG6KCfaM4' }],
    },
    categories: ['Downtown'],
  },
  {
    location: 'Montmartre, Paris, France',
    subtitle: '44 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/dTDLVlVDic4' }],
    },
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
    categories: ['Landmarks'],
  },
  {
    location: 'Paris, France',
    subtitle: '44 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/DXuxHw3S5ak' }],
    },
    categories: ['Downtown', 'Landmarks'],
  },
  {
    location: 'Quai de la Tournelle, Paris, France',
    subtitle: '42 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/olpYWcO2kHw' }],
    },
    categories: ['Downtown'],
  },
  {
    location: 'Chelyabinsk, Russia',
    subtitle: '280 km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/nBuiLbz_j4A' }],
    },
    categories: ['Mountains'],
  },
  {
    location: 'Ylläsjärvi, Finlandia',
    subtitle: '164km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/GnIGPt3sCR0' }],
    },
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
    categories: ['Mountains'],
  },
  {
    location: 'Berlin',
    subtitle: '82km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/BSQq5dRT_KU' }],
    },
    categories: ['Countryside'],
  },
  {
    location: 'Byxelkrok, Sweden',
    subtitle: '106km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/teX7sZeTQd8' }],
    },
    categories: ['Cabins', 'Countryside'],
  },
  {
    location: 'Norge',
    subtitle: '76km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/mu2qJIIMvFg' }],
    },
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
    categories: ['Forests'],
  },
  {
    location: 'Lapland, Finland',
    subtitle: '164km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/MRX-unYU1dc' }],
    },
    categories: ['Skiing', 'Arctic'],
  },
  {
    location: 'Val Gardena, Italy',
    subtitle: '63km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/6UnSrZnHe0M' }],
    },
    categories: ['Forests', 'Mountains'],
  },
  {
    location: 'Norway',
    subtitle: '420km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/vgrv9z8yLtY' }],
    },
    categories: ['Cabins', 'Coasts'],
  },
  {
    location: 'Jomsom, Nepal',
    subtitle: '420km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/bBKmwEtc1nk' }],
    },
    categories: ['Desert', 'Mountains', 'Countryside'],
  },

  {
    location: 'Norway',
    subtitle: '388km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/bCTMjQTpDNg' }],
    },
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
    categories: ['Cabins'],
  },
  {
    location: 'Lofoten, Norway',
    subtitle: '149km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/VKPcxvSdvVs' }],
    },
    categories: ['Countryside', 'Cabins', 'Mountains'],
  },
  {
    location: 'Tranøy, Norway',
    subtitle: '249km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/jGP-HVay63M' }],
    },
    categories: ['Arctic', 'Countryside'],
  },
  {
    location: 'Framnes, Dalvik, Iceland',
    subtitle: '249km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/-90kxRqKSmc' }],
    },
    categories: ['Lakes', 'Arctic', 'Minimal'],
  },
  {
    location: 'Norway',
    subtitle: '235km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/yQoAlbuxb48' }],
    },
    categories: ['Cabins', 'Lakes', 'Countryside'],
  },
  {
    location: 'Iceland',
    subtitle: '435km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/PoOXSW9eYgc' }],
    },
    categories: ['Cabins', 'Mountains', 'Countryside'],
  },
  {
    location: 'Aasiaat, Greenland',
    subtitle: '435km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/KdbzxiFT7VI' }],
    },
    categories: ['Arctic', 'Countryside'],
  },
  {
    location: 'Greenland',
    subtitle: '249km away',
    images: {
      create: [{ source: 'https://source.unsplash.com/gPuujrp4PZ0' }],
    },
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
    categories: ['Arctic', 'Coasts', 'Countryside'],
  },
]
