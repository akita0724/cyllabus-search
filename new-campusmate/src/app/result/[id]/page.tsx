import { data } from "@/lib/data";

const ItemDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const item = data[Number(id)];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-3/4">
        <h2 className="text-xl font-semibold mt-4">教員</h2>
        <p className="text-gray-700">{item.teacher}</p>
        <h2 className="text-xl font-semibold mt-4">授業時間</h2>
        <p className="text-gray-700">{item.period}</p>
        <h2 className="text-xl font-semibold mt-4">開講地区</h2>
        <p className="text-gray-700">{item.area}</p>
        <h2 className="text-xl font-semibold mt-4">概要</h2>
        <p className="text-gray-700">{item.detail}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
