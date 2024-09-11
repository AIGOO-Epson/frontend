import Materials from "@/components/material/Materials";
import useLoaderData from "@/hooks/queries/useLoaderData";
import { HydrationBoundary } from "@tanstack/react-query";

const Material = async () => {
  const { dehydratedState } = await useLoaderData();

  return (
    <HydrationBoundary state={dehydratedState}>
      <Materials />
    </HydrationBoundary>
  );
};

export default Material;
