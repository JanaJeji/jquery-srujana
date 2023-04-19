const hiddenBanner = $$("#div-msg");
const continueBtn = $$("button.btn-click")
    .addHtml("click me")
    .submit("click", () => {
        hiddenBanner.show();
    })
    .removeClass("blue");

const submitBtn = $$(".btn-submit")
    .submit("click", function (event) {
        $$("#div-msg").hide();
        console.log("Submit Button Clicked");
        alert("Submitted Successfully!!");
    });