<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.post("https://api.imgflip.com/caption_image",
		{ 
			template_id: "19723863",
			username: "PHodges",
			password: "Zo43671111Df",
			text0: "BLAH",
			text1: "BLAH"
		},
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});
</script>
</head>
<body>

<button>Send</button>

</body>
</html>