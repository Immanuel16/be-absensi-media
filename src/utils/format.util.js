const formatRupiah = (angka) => {
  let number_string = angka.toString(),
    sisa = number_string.length % 3,
    rupiah = number_string.substr(0, sisa),
    ribuan = number_string.substr(sisa).match(/\d{3}/g),
    separator = "";
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }
  return `Rp ${rupiah}`;
};

module.exports = { formatRupiah };