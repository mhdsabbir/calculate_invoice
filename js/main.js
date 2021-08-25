// For memory
document.getElementById("8gb-memory").addEventListener("click", function () {
  const fixedPrice = 1299;
  const extraMemoryCost = (document.getElementById(
    "extra-memory-cost"
  ).innerText = 0);
  const storageCostText =
    document.getElementById("extra-storage-cost").innerText;
  const storageCost = parseFloat(storageCostText);
  const deliveryChargeText =
    document.getElementById("delivery-charge").innerText;
  const deliveryCharge = parseFloat(deliveryChargeText);
  document.getElementById("total-price").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
  document.getElementById("after-discount").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
});

document.getElementById("16gb-memroy").addEventListener("click", function () {
  const fixedPrice = 1299;
  const extraMemoryCost = (document.getElementById(
    "extra-memory-cost"
  ).innerText = 180);
  const storageCostText =
    document.getElementById("extra-storage-cost").innerText;
  const storageCost = parseFloat(storageCostText);
  const deliveryChargeText =
    document.getElementById("delivery-charge").innerText;
  const deliveryCharge = parseFloat(deliveryChargeText);
  document.getElementById("total-price").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
  document.getElementById("after-discount").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
});

// For All Storage
document.getElementById("ssd-256gb").addEventListener("click", function () {
  const fixedPrice = 1299;
  const storageCost = (document.getElementById(
    "extra-storage-cost"
  ).innerText = 0);
  const extraMemoryCost_text =
    document.getElementById("extra-memory-cost").innerText;
  const extraMemoryCost = parseFloat(extraMemoryCost_text);
  const deliveryChargeText =
    document.getElementById("delivery-charge").innerText;
  const deliveryCharge = parseFloat(deliveryChargeText);
  document.getElementById("total-price").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
  document.getElementById("after-discount").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
});
document.getElementById("ssd-512gb").addEventListener("click", function () {
  const fixedPrice = 1299;
  const storageCost = (document.getElementById(
    "extra-storage-cost"
  ).innerText = 100);
  const extraMemoryCost_text =
    document.getElementById("extra-memory-cost").innerText;
  const extraMemoryCost = parseFloat(extraMemoryCost_text);
  const deliveryChargeText =
    document.getElementById("delivery-charge").innerText;
  const deliveryCharge = parseFloat(deliveryChargeText);
  document.getElementById("total-price").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
  document.getElementById("after-discount").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
});
document.getElementById("ssd-1tb").addEventListener("click", function () {
  const fixedPrice = 1299;
  const storageCost = (document.getElementById(
    "extra-storage-cost"
  ).innerText = 180);
  const extraMemoryCost_text =
    document.getElementById("extra-memory-cost").innerText;
  const extraMemoryCost = parseFloat(extraMemoryCost_text);
  const deliveryChargeText =
    document.getElementById("delivery-charge").innerText;
  const deliveryCharge = parseFloat(deliveryChargeText);
  document.getElementById("total-price").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
  document.getElementById("after-discount").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
});

// For delivery charge
document.getElementById("delivery-free").addEventListener("click", function () {
  const fixedPrice = 1299;
  const deliveryCharge = (document.getElementById(
    "delivery-charge"
  ).innerText = 0);
  const storageCostText =
    document.getElementById("extra-storage-cost").innerText;
  const storageCost = parseFloat(storageCostText);
  const extraMemoryCost_text =
    document.getElementById("extra-memory-cost").innerText;
  const extraMemoryCost = parseFloat(extraMemoryCost_text);
  document.getElementById("total-price").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
  document.getElementById("after-discount").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
});

document.getElementById("delivery-paid").addEventListener("click", function () {
  const fixedPrice = 1299;
  const deliveryCharge = (document.getElementById(
    "delivery-charge"
  ).innerText = 20);
  const storageCostText =
    document.getElementById("extra-storage-cost").innerText;
  const storageCost = parseFloat(storageCostText);
  const extraMemoryCost_text =
    document.getElementById("extra-memory-cost").innerText;
  const extraMemoryCost = parseFloat(extraMemoryCost_text);
  document.getElementById("total-price").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
  document.getElementById("after-discount").innerText =
    extraMemoryCost + fixedPrice + storageCost + deliveryCharge;
});

// displayDiscount 

document.getElementById("promo-button").addEventListener("click", function () {
  const promoCodeInput = document.getElementById("promo-code");
  const promo_code = promoCodeInput.value;
  if (promo_code.toLowerCase() == "stevekaku") {
    const totalPrice_text = document.getElementById("after-discount").innerText;
    const totalPrice = parseFloat(totalPrice_text);
    const discount = totalPrice - (totalPrice * 20) / 100;
    const displayDiscount = Math.round(discount);
    document.getElementById("after-discount").innerText = displayDiscount;
  }

  //clear
  promoCodeInput.value = "";
});
