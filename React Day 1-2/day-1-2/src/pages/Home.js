import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data: catData, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const response = await axios.get("https://catfact.ninja/fact");
      return response.data;
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error fetching cat fact</h1>;

  return (
    <div>
      <h1>Random Cat Fact: </h1>
      <p>{catData.fact}</p>
      <button style={{margin: "1rem"}} onClick={refetch}>New Cat Fact</button>
    </div>
  );
};