gsap.registerPlugin(ScrollToPlugin);
function jump() {
  const hash = /.+#(.+)/.exec(location.href)[1];
  const el =
    [...document.querySelectorAll("[anchor]")].find(
      (e) => e.getAttribute("anchor").trim() == hash
    ) ||
    [...document.querySelectorAll("*")].find(
      (e) => e.id && e.id.trim() == hash
    );
  if (el) {
    const timeline = gsap.timeline();
    timeline.to(window, {
      scrollTo: el.offsetTop - innerHeight / 2,
      duration: 0.5,
      ease: "power2",
    });
    timeline.fromTo(
      el,
      {
        background: "rgba(32, 148, 243, .5)",
        boxShadow: "0 0 5px #2094f3",
        scale: 1.3,
        onComplete() {
          el.style.display = "block";
        },
      },
      {
        background: "rgba(32, 148, 243, 0)",
        boxShadow: "0 0 0px #2094f3",
        delay: 0.5,
        scale: 1,
        ease: "power2",
        onComplete() {
          el.style.display = "inherit";
        },
        duration: 0.5,
      }
    );

    timeline.play();
  }
}
window.addEventListener("hashchange", jump);
jump();
