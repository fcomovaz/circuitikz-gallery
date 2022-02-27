// -------------------------------------------------------------
// HERE IS THE "COPY TO CLIPBOARD PART"
// -------------------------------------------------------------
$(".gallery-item").on("click", function () {
    $("#code").text(($(this).children()).attr("code"));
    /* Get the text field */
    var copyText = document.getElementById("code");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text:\n" + copyText.value);
});