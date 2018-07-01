export default function teste() {
window.$(document).ready(function(){
				//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
				//Vertical Sliding
				window.$('.boxgrid.slidedown').hover(function(){
					window.$(".cover", this).stop().animate({top:'-155px'},{queue:false,duration:300});
				}, function() {
					window.$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
				});
				//Partial Sliding (Only show some of background)
				window.$('.boxgrid.peek').hover(function(){
					window.$(".cover", this).stop().animate({top:'90px'},{queue:false,duration:160});
				}, function() {
					window.$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:160});
				});
				//Full Caption Sliding (Hidden to Visible)
				window.$('.boxgrid.captionfull').hover(function(){
					window.$(".cover", this).stop().animate({top:'105px'},{queue:false,duration:160});
				}, function() {
					window.$(".cover", this).stop().animate({top:'155px'},{queue:false,duration:160});
				});
				//Caption Sliding (Partially Hidden to Visible)
				window.$('.boxgrid.caption').hover(function(){
					window.$(".cover", this).stop().animate({top:'105px'},{queue:false,duration:160});
				}, function() {
					window.$(".cover", this).stop().animate({top:'125px'},{queue:false,duration:160});
				});
			});
		}