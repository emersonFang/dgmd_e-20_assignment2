$(document).ready(function(){

	$('#violin-btn').hover(function(){
		//hovering on the element
		console.log('Vanishing act!');
		$('#violinplayer').fadeOut(5000);
	}, 
	function(){
		//leaving the element
		console.log('I am back!');
		$('#violinplayer').fadeIn(5000);
	});//end hover

	$("#violin-btn2").click(function() {
		console.log('You clicked me!');
		alert('"Écoute ! – Écoute ! – C\'est moi, c\'est Ondine!" --Ondine');
		$('nav ul li:even').css({
	        fontStyle: "italic",
	        fontWeight: "bold",
	        backgroundColor: "#87CEEB"
     	}); //end odd nav links
     	$('.wrapper').css({
     		backgroundColor: "white"
     	})//end css
     	$('.wrapper p:even').css({
     		color: "blue"
     	})
	});//end click

	$(".profile").click(function(){
		alert('"Eeep! Don\'t scare me like that!" -Emerson');
		$('header').slideUp(2000).slideDown(1000);
		$(".profile").fadeOut(2000).fadeIn(1000);
	});//end click

	$('#firstname').focusout(function(event){
		$('#firstname + .error').html(' ');
		if ($('#firstname').val().length == 0) {
			$('#firstname, label[for="firstname"]').attr({
				class: 'error'
			}); //end attr
			$('.nofirstname').html('Please enter your first name.');
			event.preventDefault();
		} else {
			$('#firstname, label[for="firstname"]').attr({
				class: 'none'
			});
			$('.nofirstname').html(' ');
		}
	}); //end focusout

	$('#lastname').focusout(function(event){
		$('#lastname + .error').html(' ');
		if ($('#lastname').val().length == 0) {
			$('#lastname, label[for="lastname"]').attr({
				class: 'error'
			}); //end attr
			$('.nolastname').html('Please enter your last name.');
			event.preventDefault();
		} else {
			$('#lastname, label[for="lastname"]').attr({
				class: 'none'
			});
			$('.nolastname').html(' ');
		}
	}); //end focusout

	$('#email').focusout(function(event){
		$('#email + .error').html(' ');
		if ($('#email').val().length == 0) {
			$('#email, label[for="email"]').attr({
				class: 'error'
			}); //end attr
			$('.noemail').html('Please enter your email address.');
			event.preventDefault();
		} else {
			$('#email, label[for="email"]').attr({
				class: 'none'
			});
			$('.noemail').html(' ');
		}
	}); //end focusout


	$('#formbutton').tap(function(submit){
		if($('#firstname').val().length == 0) {
			$('.nofirstname').text('Please enter your first name.');
			submit.preventDefault();
		} else if($('#lastname').val().length == 0) {
			$('.nolastname').text('Please enter your last name.');
			submit.preventDefault();
		} else if ($('#email').val().length == 0) {
			$('.email').text('Please enter your email.');
			submit.preventDefault();
		} else {
			alert("This form doesn't actually go anywhere.  Haha.");
			submit.preventDefault();
		}
	}); //end click


	$('#firstname').tap(function(){
		$('.nofirstname').text('');
		$('#firstname, label[for="firstname"]').attr({
			class: 'none'
		});
	}); //end click
	$('#lastname').tap(function(){
		$('.nolastname').text('');
		$('#lastname, label[for="lastname"]').attr({
			class: 'none'
		});
	}); //end click
	$('#email').tap(function(){
		$('.noemail').text('');
		$('#email, label[for="email"]').attr({
			class: 'none'
		});
	}); //end click


	$('#formbutton').click(function(submit){
		$('#firstname + .error').html(' ');
		if ($('#firstname').val().length == 0) {
			$('#firstname, label[for="firstname"]').attr({
				class: 'error'
			}); //end attr
			$('#firstname + .error').html('Please enter your first name.');
			submit.preventDefault();
		} else {
			$('#firstname, label[for="firstname"]').attr({
				class: 'none'
			});//end attr
			$('#firstname + .error').html(' ');
		}

		$('#lastname + .error').html(' ');
		if ($('#lastname').val().length == 0) {
			$('#lastname, label[for="lastname"]').attr({
				class: 'error'
			}); //end attr
			$('#lastname + .error').html('Please enter your last name.');
			event.preventDefault();
		} else {
			$('#lastname, label[for="lastname"]').attr({
				class: 'none'
			});//end attr
			$('#lastname + .error').html(' ');
		}

		$('#email + .error').html(' ');
		if ($('#email').val().length == 0) {
			$('#email, label[for="email"]').attr({
				class: 'error'
			}); //end attr
			$('#email + .error').html('Please enter your email address.');
			event.preventDefault();
		} else {
			$('#email, label[for="email"]').attr({
				class: 'none'
			});//end attr
			$('#email + .error').html(' ');
		}

	}); //end submit

	$('#whosinterested').change(function(){
		if ($('#whosinterested').val() == 'child') {
			$('div.msg').html('Way to go for starting young!');
		} else if ($('#whosinterested').val() == 'adult') {
			$('div.msg').html('It is never too late to start!');
		} else {
			$('div.msg').html('The more the merrier!');
		}

	}); //end change


	$('main').bind('swipeleft', function(event){
		$('#pianopic').removeClass().addClass('one');
	}); //end swipe left

	$('main').bind('swiperight', function(event){
		$('#pianopic').removeClass().addClass('two');
	}); //end swipe right

	$('main').bind('taphold', function(event){
		$('#pianopic').removeClass().addClass('three');
	}); //end taphold

}); //end ready
