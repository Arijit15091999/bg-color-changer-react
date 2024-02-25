function Buttons({ colorName, setColor }) {
    function onClickHandler() {
        setColor(colorName);
    }
  return (
      <button
          className="outline-none px-4 py-2 rounded-xl "
          style={{
              backgroundColor: colorName,
              color:"white"
          }}

          onClick={onClickHandler}
      >
          {colorName}
    </button>
  )
}

export default Buttons