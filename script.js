/* sometime we need to add extra text like #section1
this code will help to add the text 
example:
https://example.com/link#section1
*/

<a class="my-link" href="https://example.com/link">Book Now</a>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".my-link");

    buttons.forEach(button => {
      let href = button.getAttribute("href");
      if (!href.includes("#section1")) {
        button.setAttribute("href", href + "#section1");
      }
    });
  });
</script>
