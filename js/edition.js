function Edition (){
	var self= this;

	self.setUp = function (){
		$('#navEdition').on('click',function(){
			$('#content').load('../html/superviseur/editionLivraison.html');
			$('#navBar').find('ul').find("[class*='active']").removeClass('active');
			$(this).parent().addClass('active');
		});
	};
}

var edition = new Edition();
edition.setUp();
