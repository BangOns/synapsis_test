import { CardComponent } from "@/components/Posts/CardComponent";
import { getPostAll } from "@/lib/react-query/posts";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", 1],
    queryFn: async ({ queryKey }) => await getPostAll(queryKey[1]),
  });

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default function Home({ dehydratedState }: any) {
  return (
    <>
      <header className="w-full ">
        <h1 className="text-2xl font-semibold uppercase">This Blogs</h1>
      </header>
      <HydrationBoundary state={dehydratedState}>
        <CardComponent />
      </HydrationBoundary>
    </>
  );
}
