const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center space-x-1 hover:text-blue-500 border-b-4 pb-3 border-transparent cursor-pointer hover:border-blue-500  ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden border-indigo-200 sm:inline-flex">{title}</p>
    </div>
  )
}

export default HeaderOption
