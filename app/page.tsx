import Image from "next/image";

async function plantSearch() {
  const response = await fetch(
    "https://trefle.io/api/v1/plants/search?token=jSujFE501ZbE3cqPJwAnniHbVLBnikORbrpj_r8JG0c&q=rose"
  );
  const body = await response.json();
  console.log(body.data, "start");
  return body.data;
}

export default async function Home() {
  const plants = await plantSearch();
  return (
    <main className="min-h screen p-8 flex felx-col gap-y-8">
      <div className="grid grid-cols-4 ga-2 justify-items-center"></div>
      {plants.map((plant: any, key: any) => (
        <div>
          <Image
            key={key}
            src={plant.image_url}
            width={50 * 1.5}
            height={50 * 1.5}
            alt={plant.common_name}
          />
          <div>{plant.common_name}</div>
        </div>
      ))}
    </main>
  );
}
