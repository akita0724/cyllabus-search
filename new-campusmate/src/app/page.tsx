const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="mb-10 font-bold text-3xl">文章で授業検索</h1>
        <textarea
          className="w-[80vw] border-2 rounded-md text-lg p-1.5 py-1 max-h-2/3 min-h-2/3 resize-none"
          placeholder="あなたが学びたいことを入力してください。"
        />
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex items-center justify-center h-16">
        <a
          href="/result"
          className="bg-blue-400 p-2 rounded-md px-30 font-bold text-lg"
        >
          検索
        </a>
      </footer>
    </div>
  );
};

export default Home;
