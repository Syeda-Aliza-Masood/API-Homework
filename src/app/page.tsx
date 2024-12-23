import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await url.json();
  console.log(response);

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400  p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Todo List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {response.map((todo: any) => (
            <div
              key={todo.id}
              className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/${todo.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                  {todo.title}
                </h2>
              </Link>
              <p className="text-gray-500 mt-2">ID: {todo.id}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
