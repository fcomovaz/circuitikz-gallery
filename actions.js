// -------------------------------------------------------------
// HERE IS THE "COPY TO CLIPBOARD PART"
// -------------------------------------------------------------
$(".gallery-item>a>img").on("click", function () {
    alert("You are dowloading: " + $(this).attr("alt")+" Circuit");
});