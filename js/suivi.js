function Suivi (){
	var self= this;

	self.setUp = function (){
		$('#navSuivi').on('click',function(){
			$('#content').load('../html/superviseur/suiviLivraison.html');
			$('#navBar').find('ul').find("[class*='active']").removeClass('active');
			$(this).parent().addClass('active');
		});
	};
}

var suivi = new Suivi();
suivi.setUp();