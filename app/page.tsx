async function PlantCount() {
  const response = await fetch(
    "https://trefle.io/api/v1/plants?token=jSujFE501ZbE3cqPJwAnniHbVLBnikORbrpj_r8JG0c"
  );
  const body = await response.json();
  console.log(body, "start");
  const totalPlants = body.data.reduce(
    // @ts-expect-error
    (acc, item) => acc + item.plant_count,
    0
  );
  return <div>{totalPlants.toLocaleString()} total plants</div>;
}
console.log("wtf");
export default function Home() {
  return (
    <main className="min-h screen p-8 flex felx-col gap-y-8">
      <div className="grid grid-cols-4 ga-2 justify-items-center"></div>
      <PlantCount />
    </main>
  );
}
