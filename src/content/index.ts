export interface ITier {

   name: string;
   id: string;
   href: string;
   price: { Sedan: string; SUV: string };
   description: string;
   features: string[];
   mostPopular: boolean;

}
export const tiers: ITier[] = [
   {
      name: 'Exterior Clean',
      id: 'tier-freelancer',
      href: '#',
      price: { Sedan: '$35', SUV: '$45' },
      description: 'Spot free exterior wash.',
      features: ['Exterior rinse', 'Rims', 'Tires', 'Spot free'],
      mostPopular: false,
   },
   {
      name: 'Interior and Exterior Clean',
      id: 'tier-freelancer',
      href: '#',
      price: { Sedan: '$45', SUV: '$55' },
      description: 'Spot free exterior wash with interior vacuum and wipe down.',
      features: ['Exterior Rinse', 'Rims and tires', 'Interior vacuum', 'Interior wipe down', 'Spot free'],
      mostPopular: false,
   },
   {
      name: 'Exterior Detail',
      id: 'tier-startup',
      href: '#',
      price: { Sedan: '$120', SUV: '$160' },
      description: 'Spot free rinse with polish and wax.',
      features: [
         'Exterior Rinse',
         'Hand waxed and shined',
         'Rims and Tires',
         'Spot free',
         'Hand dried',
      ],
      mostPopular: true,
   },
   {
      name: 'Interior Detail',
      id: 'tier-startup',
      href: '#',
      price: { Sedan: '$140', SUV: '$170' },
      description: 'Interior vacuum, wipe down, and shampoo.',
      features: [
         'Interior vacuum',
         'Wipe down',
         'Seat shampoo',
         'Stain removal',
         'Scent of your choice',
      ],
      mostPopular: false,
   },
   {
      name: 'Interior and Exterior Detail',
      id: 'tier-enterprise',
      href: '#',
      price: { Sedan: '$250', SUV: '$275' },
      description: 'Spot free rinse with police and wax. Interior vacuum, wipe down, and shampoo.',
      features: [
         'Hand washed and waxed',
         'Interior vacuum and wipe down',
         'Seat shampoo',
         'Rims and tires',
         'Spot free rise and hand dry',
         'Scent of your choice',
      ],
      mostPopular: false,
   },
]
export interface ICityData {
   name: string;
   description: string;
   img: string;
   href: string;
   position: string;
}

export const cityData: ICityData[] = [
   {
      name: "Irvine, CA",
      description: "Lorem Ipsum Ipsum Ipsum Ipsum Ips Lorem ",
      img: "/assets/citys/irvine.jpg",
      href: "/service-areas/irvine",
      position: "center"
   },
   {
      name: "Newport Beach, CA",
      description: "Lorem Ipsum Ipsum Ipsum Ipsum Ips Lorem ",
      img: "/assets/citys/newport-beach.jpg",
      href: "/service-areas/newport-beach",
      position: "50% 20%"
   },
   {
      name: "Costa Mesa, CA",
      description: "Lorem Ipsum Ipsum Ipsum Ipsum Ips Lorem ",
      img: "/assets/citys/costa-mesa.jpg",
      href: "/service-areas/costa-mesa",
      position: "center"
   },
   {
      name: "Lake Forest, CA",
      description: "Lorem Ipsum Ipsum Ipsum Ipsum Ips Lorem ",
      img: "/assets/citys/lake-forest.jpg",
      href: "/service-areas/lake-forest",
      position: "center"
   },
   {
      name: "Orange County, CA",
      description: "Lorem Ipsum Ipsum Ipsum Ipsum Ips Lorem ",
      img: "/assets/citys/orange-county.jpg",
      href: "/service-areas/orange-county",
      position: "center"
   },
]
