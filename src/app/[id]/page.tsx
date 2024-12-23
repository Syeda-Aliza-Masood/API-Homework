const Todo = async (props: any) => {
  try {
    console.log("Props received:", props);

    const url = `https://jsonplaceholder.typicode.com/todos/${props.params.id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Single Todo:", data);

    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 p-10">
        <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Todo Details
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {data.title}
          </h2>
          <p className="text-gray-500 text-lg">
            Todo ID: <span className="font-mono font-bold text-blue-600">{data.id}</span>
          </p>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);

    return (
      <main className="min-h-screen flex items-center justify-center bg-red-100">
        <h1 className="text-2xl font-bold text-red-500">
          Failed to load data. Please try again later.
        </h1>
      </main>
    );
  }
};

export default Todo;
