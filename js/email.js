$("#btn_submit").on("click", function() {

    subject = $("#input_subject").val();
    body = $("#input_name").val()+' '+$("#input_email").val()+' '+$("#textarea_message").html();
    window.open('mailto:kelvin.ingal?subject='+subject+'&body='+body);

});