export default function Post({ params }) {
  const { id } = params;

  return <p>Este es el post número {id}</p>;
}
