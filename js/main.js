$(".about-me")
.on(
		"click",
		function() {
			// $(".about-me").css("animation-play-state", "paused");
			$(".linkedin").fadeOut(1000);
			$(".email").fadeOut(1000);
			$(".facebook").fadeOut(1000);
			$(".introduction").fadeOut(1000);
			$(".portfolio").fadeOut(1000);
			$(".phone").fadeOut(1000);

			$(".about-me").removeClass("btn-floating");

			$(".about-me").css("transform", "translate(-50%, -50%)");
			$(".about-me").animate({
				left : "75%",
				top : "50%",

			}, 2000, function() {
				// Animation complete.
				$(".about-me").hide();
				$(".glowing-container-left").css("display", "flex");
			});
		});

$(".portfolio")
.on(
		"click",
		function() {
			// $(".about-me").css("animation-play-state", "paused");
			$(".linkedin").fadeOut(1000);
			$(".email").fadeOut(1000);
			$(".facebook").fadeOut(1000);
			$(".introduction").fadeOut(1000);
			$(".about-me").fadeOut(1000);
			$(".phone").fadeOut(1000);

			$(".portfolio").removeClass("btn-floating");

			$(".portfolio").css("transform", "translate(-50%, -50%)");
			$(".portfolio").animate({
				right : "75%",
				top : "50%",

			}, 2000, function() {
				// Animation complete.
				$(".portfolio").hide();
				$(".glowing-container-right").css("display", "flex");
			});
		});


$(".close-button-left")
.on(
		"click",
		function() {
			// $(".about-me").css("animation-play-state", "paused");


			$(".about-me").addClass("btn-floating");
			$(".about-me").css("transform", "translateY(-50%)");
			$(".glowing-container-left").css("display", "none");
			$(".about-me").show();
			$(".about-me").animate({
				left : "30%",
				top : "50%",

			}, 2000, function() {
				// Animation complete.
				$(".linkedin").fadeIn(1000);
				$(".email").fadeIn(1000);
				$(".facebook").fadeIn(1000);
				$(".introduction").fadeIn(1000);
				$(".portfolio").fadeIn(1000);
				$(".phone").fadeIn(1000);
			});
		});

$(".close-button-right")
.on(
		"click",
		function() {


			$(".portfolio").addClass("btn-floating");
			$(".portfolio").css("transform", "translateY(-50%)");
			$(".glowing-container-right").css("display", "none");
			$(".portfolio").show();
			$(".portfolio").animate({
				right : "30%",
				top : "50%",

			}, 2000, function() {
				// Animation complete.
				$(".linkedin").fadeIn(1000);
				$(".email").fadeIn(1000);
				$(".facebook").fadeIn(1000);
				$(".introduction").fadeIn(1000);
				$(".about-me").fadeIn(1000);
				$(".phone").fadeIn(1000);
			});
		});


$(".phone").on("click", function() {

	var copyPhoneNumber = document.getElementById("phoneNumber");
	copyPhoneNumber.select();
	document.execCommand("copy");
	M.toast({html: "Phone Number " + copyPhoneNumber.value + " copied to clipboard", classes: 'rounded'});
});

$(".email").on("click", function() {

	var copyEmailAddress = document.getElementById("emailValue");
	copyEmailAddress.select();
	document.execCommand("copy");
	M.toast({html: "Email Address " + copyEmailAddress.value + " copied to clipboard", classes: 'rounded'});
});

