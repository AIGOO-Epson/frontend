import { getStudyMateirals } from "@/lib/api/api";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
interface LoaderData {
  dehydratedState: DehydratedState;
}
const useLoaderData = async (): Promise<LoaderData> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["material"],
    queryFn: async () => {
      const data = await getStudyMateirals();
      return data.data.studyDatas;
    },
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
};

export default useLoaderData;
