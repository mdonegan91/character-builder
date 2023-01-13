window.onload = function () {
    const form = document.querySelector("form#radio-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("input#name").value;
        const dob = document.getElementById("born").value;
        const favoriteColor = document.getElementById("color").value;
        const radioSelection = document.querySelector("input[name='skills']:checked").value;

        console.log(name, dob, favoriteColor, radioSelection);

        let result = "";
        if (dob > 1993-01-01) {
          result = "young";
        }
        if ((1970-01-01 < dob ) && (dob < 1992-12-31)) {
          result = "middle age"
        }
        else {
          result = "old"
        }
            
            document.getElementById("output").innerText = result;
          });

}