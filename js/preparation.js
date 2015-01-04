function Preparation (){
	var self= this;

	self.setUp = function (){
		$('#navPreparation').on('click',function(){
			$('#content').load('../html/superviseur/preparationLivraison.html');			
			$('#navBar').find('ul').find("[class*='active']").removeClass('active');
			$(this).parent().addClass('active');
		});
	};
}

var preparation = new Preparation();
preparation.setUp();