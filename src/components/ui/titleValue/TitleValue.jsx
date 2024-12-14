function TitleValue({ title, value }) {
  return (
    <div className="flex gap-2 px-6">
      <span className="text-xs font-semibold text-[#6A7581]">{title}: </span>
      <span className="font-base text-sm text-[#1D262B]">{value}</span>
    </div>
  );
}
export default TitleValue;
