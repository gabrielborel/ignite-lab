import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { withApollo } from '../../lib/withApollo';
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from '../../graphql/generated/page';
import { useMeQuery } from '../../graphql/generated/graphql';

const Home = ({ data }) => {
  const { user } = useUser();
  const { data: me } = useMeQuery();

  console.log(data);

  return (
    <div className='text-violet-500'>
      <h1>Hello World</h1>

      <pre>me: {JSON.stringify(me, null, 2)}</pre>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/* <a href='/api/auth/logout'>Logout</a> */}
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return await getServerPageGetProducts(null, ctx);

    return { props: {} };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
