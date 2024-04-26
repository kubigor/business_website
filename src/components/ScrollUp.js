export function ScrollUp() {
  const element = document.getElementById('menu');
  element.scrollIntoView({
    behavior:"smooth",
    block:"end",
    inline:"nearest"
  })
}