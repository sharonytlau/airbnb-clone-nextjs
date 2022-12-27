import { category, Prisma } from '@prisma/client'

export const listings: (Omit<
  Prisma.ListingCreateInput,
  'startDate' | 'endDate' | 'category' | 'price' | 'rating'
> & {
  categories: category[]
})[] = [
  {
    title: 'Iseltwald, Switzerland',
    subtitle: '60 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/JT-RUtO2sfs' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Harder Kulm, Interlaken, Switzerland',
    subtitle: '65 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/1E-0mLMqAQ8' }],
    },
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
    categories: ['Mountains'],
  },

  {
    title: 'Carpathian Mountains',
    subtitle: '88 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/QPKyEU_oEFI' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Lauerz, Switzerland',
    subtitle: '57 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/thOIOTA6NHI' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Sugarloaf Provincial Park, Atholville, Canada',
    subtitle: '626 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/z9LPimZfyfo' }],
    },
    categories: ['Camps', 'Forests'],
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
    categories: ['Camps', 'Mountains', 'Outdoors'],
  },
  {
    title: 'Cucamonga Peak, United States',
    subtitle: '526 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/gvkdncTaZu8' }],
    },
    categories: ['Camps', 'Outdoors'],
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
    categories: ['Camps', 'Outdoors', 'Nature', 'Mountains'],
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
    categories: ['Camps', 'Outdoors', 'Nature', 'Mountains', 'Lakes'],
  },
  {
    title: 'Sandy Lake, BC, Canada',
    subtitle: '657 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/F4fH5dAfZnE' }],
    },
    categories: ['Camps', 'Outdoors', 'Nature', 'Mountains', 'Lakes'],
  },
  {
    title: 'Korlai Fort, Korlai, India',
    subtitle: '1033 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/yBgC-qVCxMg' }],
    },
    categories: ['Camps', 'Outdoors', 'Nature', 'Mountains', 'Lakes', 'Hiking'],
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
    categories: ['Apartment'],
  },
  {
    title: 'Spain',
    subtitle: '302 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/4ojhpgKpS68' }],
    },
    categories: ['Apartment', 'Luxury', 'Minimal', 'Villa'],
  },
  {
    title: 'Exuma, The Bahamas',
    subtitle: '1565 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/AhiUnolb7cg' }],
    },
    categories: ['Villa', 'Cottage'],
  },
  {
    title: 'Balboa Island, Newport Beach, United States',
    subtitle: '2932 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/nEvzSXBIhiU' }],
    },
    categories: ['Islands', 'Beaches', 'Cottage'],
  },
  {
    title: 'Louvain-la-Neuve, Ottignies-Louvain-la-Neuve, Belgium',
    subtitle: '142 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/KqOLr8OiQLU' }],
    },
    categories: ['Wooden', 'Urban'],
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
    categories: ['Cottage', 'Tropical', 'Nature'],
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
    categories: ['Villa'],
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
    categories: ['Luxury', 'Mountains'],
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
    categories: ['Villa', 'Coasts'],
  },
  {
    title: 'Imerovigli, Greece',
    subtitle: '2218 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/yB6WFHbkX40' }],
    },
    categories: ['Outdoors'],
  },
  {
    title: 'Bocas del Toro, Panama',
    subtitle: '3127 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/lHlsrGJMH1A' }],
    },
    categories: ['Outdoors', 'Coasts', 'Cabin'],
  },
  {
    title: 'Philippines',
    subtitle: '1634 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/688Nj6fVPXU' }],
    },
    categories: ['Outdoors', 'Coasts', 'Countryside', 'Tropical'],
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
    categories: ['Islands', 'Coasts', 'Countryside', 'Outdoors', 'Cottage'],
  },
  {
    title: 'Quebec, Canada',
    subtitle: '729 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/XoM0eYSXWMs' }],
    },
    categories: ['Camps', 'Outdoors', 'Nature', 'Mountains', 'Forests'],
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
    categories: ['Tropical', 'Outdoors'],
  },
  {
    title: 'Oregon, United States',
    subtitle: '436 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/TcgASSD5G04' }],
    },
    categories: ['Camps', 'Mountains', 'Outdoors', 'Hiking'],
  },
  {
    title: 'Arches National Park, Moab, United States',
    subtitle: '492 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/qelGaL2OLyE' }],
    },
    categories: ['Camps', 'Outdoors'],
  },
  {
    title: 'Hovden, Norway',
    subtitle: '138 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/FzthdgL6vBI' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Schwende District, Switzerland',
    subtitle: '63 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/DOmnnuarfRI' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Ninh Bình, Vietnam',
    subtitle: '210 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/8MhejqEghLk' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Madonna di Campiglio, Italy',
    subtitle: '162 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/7MH4ped6_Mo' }],
    },
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
    categories: ['Rainforests', 'Tropical'],
  },
  {
    title: 'Emerald Lake, Canada',
    subtitle: '118 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/OgcJIKRnRC8' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Montenegro, Zabljak',
    subtitle: '40 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/Yd59eQJVYAo' }],
    },
    categories: ['Mountains', 'Camps'],
  },
  {
    title: 'Sedona, AZ, USA',
    subtitle: '130 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/tNaDwQ698tM' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Leysin, Switzerland',
    subtitle: '58 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/8EkdijWGHTI' }],
    },
    categories: ['Mountains', 'Deserts'],
  },
  {
    title: 'Zakopane, Tatry, Poland',
    subtitle: '70 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/xin4oHO4FFQ' }],
    },
    categories: ['Mountains', 'Outdoors', 'Nature'],
  },
  {
    title: 'Harbor Springs, MI, USA',
    subtitle: '320 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/0_N6VO_DAN4' }],
    },
    categories: ['Mountains', 'Outdoors', 'Nature'],
  },
  {
    title: 'Zakopane, Tatry, Poland',
    subtitle: '70 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/xin4oHO4FFQ' }],
    },
    categories: ['Tropical'],
  },
  {
    title: 'Schronisko PTTK na Przegibku, Polska',
    subtitle: '72 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/inns24xeXXM' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Reine, Norwegen',
    subtitle: '122 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/TkkYD1hyVRo' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Krøttøya, Norway',
    subtitle: '130 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/WNntEI6JT6Y' }],
    },
    categories: ['Mountains', 'Countryside'],
  },
  {
    title: 'Rüte, Switzerland',
    subtitle: '60 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/1opHGv8iXvg' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Tkvarcheli',
    subtitle: '80 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/cf6UhTW9tSs' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'San Francisco, United States',
    subtitle: '220 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/6eP8EMpTbA4' }],
    },
    categories: ['Villa', 'Urban'],
  },
  {
    title: 'Lisbon, Portugal',
    subtitle: '40 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/8saVYOMHFzU' }],
    },
    categories: ['Villa', 'Urban'],
  },
  {
    title: 'Paris, France',
    subtitle: '46 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/PRFiPHhFwQA' }],
    },
    categories: ['Villa', 'Urban'],
  },
  {
    title: 'Paris, France',
    subtitle: '45 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/xUZye7XNxuM' }],
    },
    categories: ['Cottage'],
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
    categories: ['Apartment', 'Urban'],
  },
  {
    title: 'Montmartre, Paris, France',
    subtitle: '44 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/fbcG6KCfaM4' }],
    },
    categories: ['Downtown'],
  },
  {
    title: 'Montmartre, Paris, France',
    subtitle: '44 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/dTDLVlVDic4' }],
    },
    categories: ['Architecture', 'Cathedral'],
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
    categories: ['Apartment'],
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
    categories: ['Urban', 'Landmarks'],
  },
  {
    title: 'Paris, France',
    subtitle: '44 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/DXuxHw3S5ak' }],
    },
    categories: ['Downtown', 'Landmarks'],
  },
  {
    title: 'Quai de la Tournelle, Paris, France',
    subtitle: '42 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/olpYWcO2kHw' }],
    },
    categories: ['Downtown'],
  },
  {
    title: 'Chelyabinsk, Russia',
    subtitle: '280 km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/nBuiLbz_j4A' }],
    },
    categories: ['Mountains'],
  },
  {
    title: 'Ylläsjärvi, Finlandia',
    subtitle: '164km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/GnIGPt3sCR0' }],
    },
    categories: ['Countryside', 'Cottage'],
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
    categories: ['Outdoors', 'Mountains', 'Nature'],
  },
  {
    title: 'Berlin',
    subtitle: '82km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/BSQq5dRT_KU' }],
    },
    categories: ['Countryside', 'Nature'],
  },
  {
    title: 'Byxelkrok, Sweden',
    subtitle: '106km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/teX7sZeTQd8' }],
    },
    categories: ['Outdoors', 'Cabin', 'Countryside', 'Nature', 'Cottage'],
  },
  {
    title: 'Norge',
    subtitle: '76km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/mu2qJIIMvFg' }],
    },
    categories: ['Outdoors', 'Cabin', 'Nature', 'Cottage'],
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
    categories: ['Forests', 'Outdoors', 'Nature'],
  },
  {
    title: 'Lapland, Finland',
    subtitle: '164km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/MRX-unYU1dc' }],
    },
    categories: ['Skiing', 'Arctic'],
  },
  {
    title: 'Val Gardena, Italy',
    subtitle: '63km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/6UnSrZnHe0M' }],
    },
    categories: ['Nature', 'Forests', 'Mountains'],
  },
  {
    title: 'Norway',
    subtitle: '420km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/vgrv9z8yLtY' }],
    },
    categories: ['Cabin', 'Coasts', 'Cliffs'],
  },
  {
    title: 'Jomsom, Nepal',
    subtitle: '420km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/bBKmwEtc1nk' }],
    },
    categories: ['Deserts', 'Nature', 'Mountains', 'Cottage', 'Countryside'],
  },

  {
    title: 'Norway',
    subtitle: '388km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/bCTMjQTpDNg' }],
    },
    categories: ['Nordic', 'Mountains'],
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
    categories: ['Cabin'],
  },
  {
    title: 'Lofoten, Norway',
    subtitle: '149km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/VKPcxvSdvVs' }],
    },
    categories: ['Countryside', 'Cottage', 'Cabin', 'Mountains', 'Glacier'],
  },
  {
    title: 'Tranøy, Norway',
    subtitle: '249km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/jGP-HVay63M' }],
    },
    categories: ['Arctic', 'Nature', 'Countryside', 'Outdoors'],
  },
  {
    title: 'Framnes, Dalvik, Iceland',
    subtitle: '249km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/-90kxRqKSmc' }],
    },
    categories: ['Lakes', 'Arctic', 'Nature', 'Outdoors', 'Minimal'],
  },
  {
    title: 'Norway',
    subtitle: '235km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/yQoAlbuxb48' }],
    },
    categories: ['Cabin', 'Lakes', 'Outdoors', 'Countryside'],
  },
  {
    title: 'Iceland',
    subtitle: '435km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/PoOXSW9eYgc' }],
    },
    categories: ['Cabin', 'Mountains', 'Glacier', 'Countryside'],
  },
  {
    title: 'Aasiaat, Greenland',
    subtitle: '435km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/KdbzxiFT7VI' }],
    },
    categories: ['Arctic', 'Nature', 'Outdoors', 'Countryside'],
  },
  {
    title: 'Henningsvær, Norwegen',
    subtitle: '263km away',
    listingImages: {
      create: [
        { source: 'https://source.unsplash.com/zRANx1FoW2U' },
        { source: 'https://source.unsplash.com/Y4_j8ZwrO9c' },
      ],
    },
    categories: ['Islands', 'Arctic', 'Nature', 'Outdoors', 'Minimal'],
  },
  {
    title: 'Greenland',
    subtitle: '249km away',
    listingImages: {
      create: [{ source: 'https://source.unsplash.com/gPuujrp4PZ0' }],
    },
    categories: [
      'Arctic',
      'Nature',
      'Outdoors',
      'Countryside',
      'Cabin',
      'Cottage',
    ],
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
    categories: [
      'Arctic',
      'Coasts',
      'Nature',
      'Outdoors',
      'Countryside',
      'Cottage',
    ],
  },
]
