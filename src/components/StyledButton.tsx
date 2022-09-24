function StyledButton({
  type,
  text,
  onClick,
}: {
  type: 'light' | 'dark'
  text: string
  onClick: () => void
}) {
  return (
    <button
      className={`btn ${
        type === 'dark' ? 'bg-deepBlack' : 'bg-redOrange'
      } h-[5.6rem] w-[22.8rem] rounded-[50rem] text-shallowWhite ${
        type === 'dark' ? 'hover:bg-purple' : 'hover:bg-orange'
      }`}
      onClick={onClick}
    >
      <p className="text-[1.6rem]">{text}</p>
    </button>
  )
}

export default StyledButton
