const API_TOKEN = process.env.API_TOKEN;

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <ul>
        {/* {paintings.map((painting) => (
          <div key={painting.id}>
            <h1>{painting.title}</h1>
          </div>
        ))} */}
      </ul>
    </main>
  );
}
