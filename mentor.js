const mentorCards = document.querySelectorAll(".mentor-card");

mentorCards.forEach((mentorCard) => {
  mentorCard.addEventListener("click", () => {
    mentorCard.classList.toggle("expanded");
  });
});
