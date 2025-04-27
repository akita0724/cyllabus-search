export const SearchResultItem = ({
  title,
  summary,
  i,
}: {
  title: string;
  summary: string;
  i: number;
}) => {
  return (
    <tr key={i} className="border-b-2 border-gray-400 py-5">
      <td className="w-[2vw] mx-1">{i}. </td>
      <td className="w-[30vw] mx-1">{title}</td>
      <td className="w-[43vw] mx-1">{summary}</td>
      <td className="w[5vw] mx-1">
        <a className="text-blue-400" href={`/result/${i}`}>
          詳細
        </a>
      </td>
    </tr>
  );
};
