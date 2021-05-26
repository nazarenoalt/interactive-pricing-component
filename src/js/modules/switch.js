const activateSwitch = () => {
  const switchButton = document.querySelector("#switch");
  const ball = document.querySelector("#switch_ball");
  
  switchButton.addEventListener('click', () => {
    if (ball.classList.contains('activated')) {
      ball.classList.remove('activated');
      switchButton.classList.remove('activated');
    } else {
      ball.classList.add('activated')
      switchButton.classList.add('activated');
    }
  })
}

export default activateSwitch;