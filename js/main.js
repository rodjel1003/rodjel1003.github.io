$(".about-me")
.on(
		"click",
		function() {
			$(".linkedin").fadeOut(1000);
			$(".email").fadeOut(1000);
			$(".facebook").fadeOut(1000);
			$(".introduction").fadeOut(1000);
			$(".portfolio").fadeOut(1000);
			$(".phone").fadeOut(1000);

			$(".about-me").removeClass("btn-floating");
			$(".about-me").addClass("btn-hover");

			$(".about-me").css("transform", "translate(-50%, -50%)");
			let bodyWidth = $("body").width();
			let left;
			if(bodyWidth >= 320 && bodyWidth <= 1024) {
				left = "98%";
			} else {
				left = "75%";
			}
			$(".about-me").animate({
				left : left,
				top : "50%",

			}, 500, function() {
				$(".about-me").hide();
				$(".glowing-container-left").css("display", "flex");
			});
		});

$(".portfolio")
.on(
		"click",
		function() {
			$(".linkedin").fadeOut(1000);
			$(".email").fadeOut(1000);
			$(".facebook").fadeOut(1000);
			$(".introduction").fadeOut(1000);
			$(".about-me").fadeOut(1000);
			$(".phone").fadeOut(1000);

			$(".portfolio").removeClass("btn-floating");
			$(".portfolio").addClass("btn-hover");

			$(".portfolio").css("transform", "translate(-50%, -50%)");
			let bodyWidth = $("body").width();
			let right;
			if(bodyWidth >= 320 && bodyWidth <= 1024) {
				right = "86%";
			} else {
				right = "75%";
			}
			$(".portfolio").animate({
				right : right,
				top : "50%",

			}, 500, function() {
				$(".portfolio").hide();
				$(".glowing-container-right").css("display", "flex");
			});
		});


$(".close-button-left")
.on(
		"click",
		function() {


			$(".about-me").addClass("btn-floating");
			$(".about-me").removeClass("btn-hover");
			$(".about-me").css("transform", "translateY(-50%)");
			$(".glowing-container-left").css("display", "none");
			$(".about-me").show();

			$(".about-me").animate({
				left : "14%",
				top : "5%",

			}, 500, function() {
				// Animation complete.
				$(".about-me").css("right", "unset");
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
			$(".portfolio").removeClass("btn-hover");
			$(".portfolio").css("transform", "translateY(-50%)");
			$(".glowing-container-right").css("display", "none");
			$(".portfolio").show();
			$(".portfolio").animate({
				right: "14%",
				top : "5%",

			}, 500, function() {
				// Animation complete.
				$(".portfolio").css("left", "unset");
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
	M.toast({html: "Phone Number <span class='glow2'>&nbsp;" + copyPhoneNumber.value + "&nbsp;</span> copied to clipboard", classes: 'rounded'});
});

$(".email").on("click", function() {

	var copyEmailAddress = document.getElementById("emailValue");
	copyEmailAddress.select();
	document.execCommand("copy");
	M.toast({html: "Email Address <span class='glow2'>&nbsp;" + copyEmailAddress.value + "&nbsp;</span> copied to clipboard", classes: 'rounded'});
});

M.AutoInit();

