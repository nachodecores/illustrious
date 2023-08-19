const searchQuery = "cat";
const apiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json`;
const fetchSomeData = () => {
  return fetch(apiURL).then((response) => {});
};

export default async function Ranking() {
  const data = await fetchSomeData();
  return (
    <>
      <h1>Acá va la lista de programadores</h1>
    </>
  );
}
