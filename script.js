document.addEventListener("DOMContentLoaded", function () {
  const phraseElement = document.querySelector(".phrase");
  const textElement = phraseElement.querySelector("h1");
  const maxShadowMovement = 300; // 300px

  function updateShadow(e) {
    const width = phraseElement.offsetWidth;
    const height = phraseElement.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;

    if (e.target !== phraseElement) {
      x += e.target.offsetLeft;
      y += e.target.offsetTop;
    }

    const xWalk = Math.round(
      (x / width) * maxShadowMovement - maxShadowMovement / 2
    );
    const yWalk = Math.round(
      (y / height) * maxShadowMovement - maxShadowMovement / 2
    );

    textElement.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(0, 150, 255, 0.7),
    ${-xWalk}px ${yWalk}px 0 rgba(255, 0, 150, 0.7),
    ${yWalk}px ${-xWalk}px 0 rgba(150, 255, 0, 0.7),
    ${-yWalk}px ${xWalk}px 0 rgba(255, 150, 0, 0.7)
`;
  }

  phraseElement.addEventListener("mousemove", updateShadow);
});
