export const dynamic = 'force-dynamic';
import getCurrentUser from './actions/getCurrentUser';
import Container from './components/Container';
import getListings, { IListingsParams } from '@/app/actions/getListings';
import EmptyState from './components/EmptyState';
import ListingCard from './components/listings/ListingCard';

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = (await getCurrentUser()) || undefined;

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className='pt-24 grid grid-col-1 sm:grip-col-2 md:grid-col-4 lg:grid-cols-5 xl:grid-cols-6 gap-8'>
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
