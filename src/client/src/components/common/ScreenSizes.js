export default size => {
  if (size <= 480) {
    return "mobile";
  } else {
    if (size < 768) {
      return "tablet";
    } else {
      return "desktop";
    }
  }
};
