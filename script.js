const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateCount);
});
function updateCount() {
  const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
  document.getElementById('count').textContent = ` ${checkedCount}/3`;

  if (this.checked) {
    this.parentElement.classList.add('checked');
  } else {
    this.parentElement.classList.remove('checked');
  }
}
