function animateSpecialTitle(specialTitles, speed) {
    let index = 0;
    const titlesLength = specialTitles.length;
    
    // Interval function to change the title text
    const interval = setInterval(() => {
      document.title = specialTitles[index];
      index = (index + 1) % titlesLength;
    }, speed);
}

// Example usage
animateSpecialTitle(["$", "$c", "$cr", "$cri", "$crim", "$crim ", "$crim 1", "$crim 13", "$crim 133", "$crim 1337"], 500); // Change the titles and speed as needed
