$(() => {
  $("#myButton").click(() => {
    let buttonState = document.getElementById("mainTitle");
    if (buttonState.html === "Text changed by click button") {
    console.log(buttonState);
    }
    $("#mainTitle").html("Text changed by click button")
  })
})