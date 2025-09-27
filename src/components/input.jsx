function MainInput({ inpType ="text", inpPlaceholder="", inpValue=undefined , inpSetValue = undefined }) {
  return (
    <>
      <input type={inpType} placeholder={inpPlaceholder} value={inpValue} onChange={inpSetValue}/>
    </>
  );
}

export default MainInput;