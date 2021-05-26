const activateSwitch = () => {
  const switchButton = document.querySelector("#switch");
  const ball = document.querySelector("#switch_ball");
  
  switchButton.addEventListener('click', () => {
    ball.classList.contains('activated')
      ? ball.classList.remove('activated')
      : ball.classList.add('activated')
  })
}

export default activateSwitch;