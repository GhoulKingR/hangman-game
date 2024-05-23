import Game from "./Game";

export async function generateStaticParams() {
  return [0, 1, 2, 3, 4, 5].map((n) => ({
    category: n.toString(),
  }));
}

type Props = {
  params: {
    category: string;
  };
};
function Page(props: Props) {
  const category = Number(props.params.category) || 0;
  return <Game category={category} />;
}

export default Page;
