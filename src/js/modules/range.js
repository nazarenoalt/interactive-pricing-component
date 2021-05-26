const inputRange = () => {
  const range = document.querySelector("#pageviews_range");
  const span_number = document.querySelector("#pageview_number");
  const span_price = document.querySelector("#price_number");

  range.setAttribute('min', 1)
  range.setAttribute('max', 5)
  range.setAttribute('value', "3")

  range.addEventListener('input', () => {
    const value = range.value;

    if(value === "1") {
      span_number.innerText = "10K"
      span_price.innerText="$8"
    } else if(value === "2") {
      span_number.innerText = "50K"
      span_price.innerText="$12"
    } else if(value === "3") {
      span_number.innerText = "100K"
      span_price.innerText="$16"
    } else if(value === "4") {
      span_number.innerText = "500K"
      span_price.innerText="$24"
    } else if(value === "5") {
      span_number.innerText = "1M"
      span_price.innerText="$36"
    }
  })
}
export default inputRange;