function MainInput({ inpType, inpPlaceholder, inpValue, inpSetValue }) {
  return (
    <>
      <input type={inpType} placeholder={inpPlaceholder} value={inpValue} onChange={inpSetValue}/>
    </>
  );
}

export default MainInput;