document.getElementById("apply-btn").addEventListener("click", function () {
  const originalPrice = getInputValueById("original-field");
  const discountInputValue = getInputValueById("discount-field");
  const couponField = document.getElementById("coupon-field");
  const couponFieldValue = couponField.value;
  if (couponFieldValue === "DISCOUNT") {
    const discountPrice = (originalPrice * discountInputValue) / 100;
    const discountPriceResults = originalPrice - discountPrice;
    const payAmount = document.getElementById("pay-amount");
    payAmount.innerText = discountPriceResults;
  }
  else{
    const payAmount = document.getElementById("pay-amount");
    payAmount.innerText = originalPrice;
  }
});
