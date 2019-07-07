function submitForm() {
    var frm = document.getElementsByName('mc-embedded-subscribe-form')[0];
    frm.submit();
    setTimeout(function () {
        frm.reset();
    }, 1000);
};