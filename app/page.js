import Banner from '@/components/Banner'
import MediumCards from '@/components/MediumCards';
import Header from '@/components/Header'
import SmallCard from '@/components/SmallCard';
import { uuid } from 'uuidv4';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';

const exploreData = [{"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},{"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},{"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},{"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},{"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}];
const cardsData = [{"img":"https://links.papareact.com/2io","title":"Outdoor getaways"},{"img":"https://links.papareact.com/q7j","title":"Unique stays"},{"img":"https://links.papareact.com/s03","title":"Entire homes"},{"img":"https://links.papareact.com/8ix","title":"Pet allowed"}]

export default function Home() {
  return (
       <div className=''>
        <Header />
        <Banner />

        <main className='max-w-7xl mx-auto px-8 sm:px-16'>
          <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4'>
              {exploreData.map(item=>(
                <SmallCard 
                  key={uuid()}
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                  />
              ))}
            </div>
          </section>

          <section className='pt-6'>
            <h2  className='text-4xl font-semibold py-8'>Live Anywhere </h2>
            
            <div className='flex  space-x-3  p-3 -ml-3 overflow-scroll scrollbar-hide'>
              {cardsData.map(item=>(
                <MediumCards 
                  key={uuid()}
                  img={item.img}
                  title={item.title}
                  />
              ))}
            </div>
          </section >

          <section className='pt-6'>
                <LargeCard 
                img="https://links.papareact.com/4cj"
                title='The Gratest Outdoors'
                description='Wishlist curated by Airbnb.'
                buttonText='Get Inspired'
                />
          </section>
        </main>

        <Footer />
       </div>
  )
}


// export async function getStaticProps(){
//   const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
//     (res)=>res.json()
//   )

//   return {props:{exploreData}}
// }
