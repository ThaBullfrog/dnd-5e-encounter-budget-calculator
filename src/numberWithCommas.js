const numberWithCommas = (x) => {
  return x.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default numberWithCommas;
