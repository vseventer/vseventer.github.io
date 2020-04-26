const target = document.getElementById('js-countdown');
if (target) {
  const deadline = new Date(2020, 6, 1); // Month is zero-indexed.
  const daysLeft = (deadline.getTime() - Date.now()) / 1000 / 60 / 60 / 24;
  target.textContent = daysLeft < 0 ? 0 : Math.floor(daysLeft) + 1;
}
