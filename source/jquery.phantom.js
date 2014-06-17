/*****
Widget: jQuery.phantom
Author: David CK Chan
Date:   June 2 2014

Description: Generates a phantom form and submits it.
*****/

jQuery.phantom = function(config) {
  jQuery(document.body).append('<form name="'+config.name+'" action="'+config.action+'" method="'+config.method+'"></form>');
  var $form = jQuery('form[name='+config.name+']');
  
  jQuery.each( config.data, function( key, value ) {
  	$form.append('<input type="hidden" name="'+key+'" value="'+value+'"></input>');
  });

  if (config.preSubmit)
    config.preSubmit.apply(this, jQuery($form));

  $form.submit();
};