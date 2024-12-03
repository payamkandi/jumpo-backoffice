function MenuRow({ icon, title, onClick }) {
  return (
    <div className="flex w-full items-center gap-2 px-2 py-3" onClick={onClick}>
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default MenuRow;
